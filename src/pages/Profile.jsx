import Cookies from 'js-cookie'
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact'
import React, { Component } from 'react'
import patientNav from '../components/Patient/Navbar';
import staffNav from '../components/Medical/Navbar';
import adminNav from '../components/Admin/Navbar';
import { connect } from 'react-redux';
import {fetchUserInfo, changeDisplayname, changePassword} from '../Redux/Actions/UsersAction';
import profileAvatar from '../assets/undraw_profile_pic_ic5t (1).svg' //undraw_male_avatar_323b
import Footer from '../components/share/Footer';
import '../styling/profile.css'


class Profile extends Component {
    constructor(props) {
        super(props)   
        this.state = {
           displayname: '',
           old_password: '',    
           new_password: '',
           errorDisplayname: '',
           errorPassword: ''
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
        if (this.state.errorDisplayname || this.state.errorPassword) {
            this.setState({
                errorDisplayname: '',
                errorPassword: ''
            })
        }
      }

    changeDisplayname(e) {
        if (this.state.displayname == ''){
            this.setState({
                errorDisplayname: "Please enter a valid name!"
            })
        } else {
            let sessionid = Cookies.get('sessionid')
            this.props.changeDisplayname(sessionid, this.state.displayname)
            alert('Display name changed successfully!')
            location.reload()
        }

    }

    changePassword(e) {
        if (this.state.new_password == ''){
            this.setState({
                errorPassword: 'Please enter a valid password!'
            })
        } else if (this.state.new_password === this.state.old_password) {
            this.setState({
                errorPassword: 'New password must be different from current password!'
            })
        }
        else {
            let sessionid = Cookies.get('sessionid')
            this.props.changePassword(sessionid, this.state.old_password, this.state.new_password)                
        }
    }

    componentDidUpdate(prevProps){
        console.log(this.props.result)
        if(this.props.result.status == 'error:invalid password') {
            alert('Wrong password!')
            this.props.result.status = []
        } else if (this.props.result.status == 'success'){
            alert('Password changed successfully')
            this.props.result.status = []
            location.reload()
        }
    }

    render() {
        let role = Cookies.get('role')
        let Navbar = role === '0' ? patientNav : role === '1' ? staffNav : adminNav;
        const {displayname, old_password, new_password} = this.state
        return (
            <div id="profile-container">
                {<Navbar displayname={this.props.data.displayname}/>}
                <div id="profile-content">
                    <div id="profile-header">
                        <MDBCol md="12" className="profile-header">
                            <p class="h1 profile-header-text">Edit Profile</p>
                        </MDBCol>
                    </div>
                    <div id="profile-body">
                        <MDBContainer fluid>
                            <MDBRow>
                                <MDBCol md="4">
                                    <MDBRow id="profile-row">
                                        {/* <div id="profile-row"> */}
                                        <img src={profileAvatar} className="img-profile" alt="img-profile"/>
                                        {/* </div> */}
                                    </MDBRow>
                                    <MDBRow class="profile-name-row">
                                        <h2 class="profile-name pf-top">{this.props.data.username}</h2>
                                    </MDBRow>
                                    <MDBRow class="profile-name-row">
                                        <h4 class="profile-name pf-btm">{this.props.data.displayname}</h4>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md="7" id="edit-content">
                                    <h3>Profile</h3>
                                    <hr/>
                                    {/* <MDBRow> */}
                                    {/* Change displayname */}
                                    <MDBInput label="Display name" name="displayname" icon="address-card" value={displayname} onChange={this.handleChange}/>

                                    <MDBBtn onClick={this.changeDisplayname}> Change display name </MDBBtn>
                                    {this.state.errorDisplayname && <div className="has-text-danger"> {this.state.errorDisplayname} </div>}
                                    <br/>
                                    {/* </MDBRow> */}
                                    {/* <MDBRow> */}
                                    {/* Show username */}
                                    {/* <MDBInput label="Username" icon="user-circle" value={this.props.data.username} /> */}
                                    
                                    {/* Change password */}
                                    <MDBInput type="password" label="Enter current password" name="old_password" value={old_password} onChange={this.handleChange} icon="unlock-alt" />
                                    <MDBInput type="password" label="Enter new password" name="new_password" value={new_password} onChange={this.handleChange} icon="unlock-alt" />
                                    <MDBBtn onClick={this.changePassword}> Change password </MDBBtn>
                                    {this.state.errorPassword && <div className="has-text-danger"> {this.state.errorPassword} </div>}
                                    {/* </MDBRow> */}
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        </div>
                    </div>
                <hr/>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    data: state.user.data,
    result: state.user.result
});
export default connect(mapStateToProps, { fetchUserInfo, changeDisplayname, changePassword })(Profile)