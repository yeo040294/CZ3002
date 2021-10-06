import Cookies from 'js-cookie'
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact'
import React, { Component } from 'react'
import patientNav from '../components/Patient/Navbar';
import staffNav from '../components/Medical/Navbar';
import adminNav from '../components/Admin/Navbar';
import { connect } from 'react-redux';
import {fetchUserInfo, changeDisplayname, changePassword} from '../Redux/Actions/UsersAction';

class Profile extends Component {
    constructor(props) {
        super(props)   
        this.state = {
           displayname: '',
           old_password: '',    
           new_password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeDisplayname = this.changeDisplayname.bind(this);
        this.changePassword = this.changePassword.bind(this);
      }
    componentDidMount() {
        let sessionid = Cookies.get('sessionid')
        let userid = Cookies.get('userid')
        this.props.fetchUserInfo(sessionid, userid)
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
      }

    changeDisplayname(e) {
        let sessionid = Cookies.get('sessionid')
        this.props.changeDisplayname(sessionid, this.state.displayname)
        console.log(this.state.displayname)
        alert('Display name changed successfully!')
        location.reload()
    }

    changePassword(e) {
        let sessionid = Cookies.get('sessionid')
        console.log(this.state.old_password)
        this.props.changePassword(sessionid, this.state.old_password, this.state.new_password)        
        alert('Password changed successfully!')
        location.reload()
    }

    render() {
        let role = Cookies.get('role')
        console.log(this.props.data)
        let Navbar = role === '0' ? patientNav : role === '1' ? staffNav : adminNav;
        const {displayname, old_password, new_password} = this.state
        return (
            <div>
                <MDBContainer>
                    {<Navbar />}
                    <MDBRow>
                        <MDBCol>
                            <h3>Edit profile</h3>
                            <hr/>
                            <MDBInput label="Display name" name="displayname" icon="address-card" value={displayname} onChange={this.handleChange}/>
                            <p>Current display name: {this.props.data.displayname} </p>
                            <MDBBtn onClick={this.changeDisplayname}> Change display name </MDBBtn>
                            <MDBInput label="Username" icon="user-circle" value={this.props.data.username} />
                            <MDBInput type="password" label="Enter current password" name="old_password" value={old_password} onChange={this.handleChange} icon="unlock-alt" />
                            <MDBInput type="password" label="Enter new password" name="new_password" value={new_password} onChange={this.handleChange} icon="unlock-alt" />
                            <MDBBtn onClick={this.changePassword}> Change password </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    data: state.user.data
});
export default connect(mapStateToProps, { fetchUserInfo, changeDisplayname, changePassword })(Profile)