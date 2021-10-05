import Cookies from 'js-cookie'
import { MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact'
import React, { Component } from 'react'
import patientNav from '../components/Patient/Navbar';
import staffNav from '../components/Medical/Navbar';
import adminNav from '../components/Admin/Navbar';

export default class Profile extends Component {

    render() {
        let role = Cookies.get('role')
        let Navbar = role === '0' ? patientNav : role === '1' ? staffNav : adminNav;
        return (
            <div>
                <MDBContainer>
                    {<Navbar />}
                    <MDBRow>
                        <MDBCol>
                            <h3>Profile</h3>
                            <hr/>
                            <MDBInput label="Display Name" icon="address-card" />
                            <MDBInput label="Username" icon="user-circle" />
                            <MDBInput type="password" label="Password" icon="unlock-alt" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
