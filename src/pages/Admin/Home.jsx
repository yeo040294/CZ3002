import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import Navbar from '../../components/Admin/Navbar';
import Footer from '../../components/share/Footer';
import '../../styling/index.css';
import '../../styling/admin_home.css';
import accountIcon from '../../assets/accountIcon.svg'
import gameIcon from '../../assets/gameIcon.svg'

export default class Login extends Component {

    navigate = (e)=> {
        this.props.history.push(`/admin/${e.target.id}`)
        //this.props.history.push('/admin/account')
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="header">
                    <p>Home</p>
                </div>
                <MDBContainer fluid>
                    <div className="body">
                        <MDBRow className="content" size="8">
                            <MDBCol className="content-wrapper" size="4">
                                <div class="card">
                                    <div className="top">
                                        <img src={accountIcon}
                                            className="card-img-top"
                                            alt="img_Account"/>
                                    </div>
                                    <div class="card-body">
                                        <MDBBtn color="#ED5C5F" className="btnAccount" id="account" onClick={this.navigate} >
                                            <MDBIcon icon="magic" className="mr-1" size="lg" /> Create Account
                                        </MDBBtn>
                                    </div>
                                </div>
                                
                            </MDBCol>
                            <MDBCol className="content-wrapper" size="4">
                                <div class="card">
                                    <div className="top">
                                        <img src={gameIcon}
                                            class="card-img-top"
                                            alt="img_Account"/>
                                    </div>
                                    <div class="card-body">
                                        <MDBBtn color="#ED5C5F" className="btnUpload" id="upload" onClick={this.navigate}>
                                            <MDBIcon icon="magic" className="mr-1" size="lg" /> Upload Question
                                        </MDBBtn>
                                    </div>
                                </div>
                                
                            </MDBCol>
                        </MDBRow>
                    </div>
                </MDBContainer>
            </div>
        )
    }
}
