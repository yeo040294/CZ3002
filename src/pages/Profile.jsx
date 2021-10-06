import Cookies from 'js-cookie'
import { MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact'
import React, { Component } from 'react'
import patientNav from '../components/Patient/Navbar';
import staffNav from '../components/Medical/Navbar';
import adminNav from '../components/Admin/Navbar';
import { connect } from 'react-redux';
import {fetchUserInfo} from '../Redux/Actions/UsersAction';

class Profile extends Component {
    componentDidMount() {
        let sessionid = Cookies.get('sessionid')
        let userid = Cookies.get('userid')
        this.props.fetchUserInfo(sessionid, userid)
    }

    render() {
        let role = Cookies.get('role')
        let Navbar = role === '0' ? patientNav : role === '1' ? staffNav : adminNav;
        return (
            <div>
                <MDBContainer>
                    {<Navbar />}
                    <MDBRow>
                        <MDBCol>
                            <h3>Edit profile {this.props.data.username}</h3>
                            <hr/>
                            <MDBInput label="displayname" icon="address-card" />
                            <MDBInput label="Username" icon="user-circle" />
                            <MDBInput type="password" label="Enter new password" icon="unlock-alt" />
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
export default connect(mapStateToProps, { fetchUserInfo })(Profile)