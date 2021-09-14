import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import Navbar from '../../components/Admin/Navbar';
import Footer from '../../components/share/Footer';

export default class Login extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>
                    <MDBRow>
                        <h3>Home</h3>
                        <hr />
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <MDBBtn color="primary">
                                <MDBIcon icon="magic" className="mr-1" size="lg" /> Create Account
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol>
                        <MDBBtn color="primary">
                                <MDBIcon icon="magic" className="mr-1" size="lg" /> Upload Question
                            </MDBBtn>
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>
                <Footer />;
            </div>
        )
    }
}
