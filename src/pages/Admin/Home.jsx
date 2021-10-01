import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import Navbar from '../../components/Admin/Navbar';
import Footer from '../../components/share/Footer';

export default class Login extends Component {

    navigate = (e)=> {
        this.props.history.push(`/admin/${e.target.id}`)
        //this.props.history.push('/admin/account')
    }

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
                            <MDBBtn id="account" color="primary" onClick={this.navigate} >
                                <MDBIcon icon="magic" className="mr-1" size="lg" /> Create Account
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol>
                        <MDBBtn id="upload" color="primary" onClick={this.navigate} >
                                <MDBIcon icon="magic" className="mr-1" size="lg" /> Upload Question
                            </MDBBtn>
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
