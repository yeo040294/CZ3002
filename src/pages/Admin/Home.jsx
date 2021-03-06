import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import Navbar from '../../components/Admin/Navbar';
import Footer from '../../components/share/Footer.jsx';
import '../../styling/index.css';
import '../../styling/admin_home.css';
import accountIcon from '../../assets/accountIcon.svg';
import gameIcon from '../../assets/gameIcon.svg';
import {fetchUserInfo} from '../../Redux/Actions/UsersAction';

export default class Login extends Component {

    navigate = (e)=> {
        this.props.history.push(`/admin/${e.target.id}`)
        //this.props.history.push('/admin/account')
    }

    render() {
        return (
            <div id="admin-container">
                <Navbar displayname="Admin"/>
                <div id="admin-content">
                    <MDBContainer fluid>
                        <div id="admin-body">
                            <div id="admin-header">
                                <MDBRow md="12" class="admin-header">
                                    <MDBCol md="12">
                                        <p class="h1">Home</p>
                                    </MDBCol>
                                </MDBRow>
                            </div>
                            <div class="accountBody">                       
                                <MDBRow md="12">
                                    <MDBCol>
                                        <div class="left-content">
                                            <img src={accountIcon} className="card-img-top" alt="img_Account"/>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow md="12">
                                    <MDBCol>
                                        <div class="left-btn">
                                            <MDBBtn color="#ED5C5F" className="btnAccount" id="account" onClick={this.navigate} >
                                            <MDBIcon icon="magic" className="mr-1" size="lg" /> Create Account
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </div>
                            <div class="questionBody">
                                {/* <p>Create Question</p> */}
                                <MDBRow>
                                    <div class="right-content">
                                        <img src={gameIcon} class="card-img-left" alt="img_Account"/>
                                    </div>
                                </MDBRow>
                                <MDBRow>
                                    <div class="right-btn">
                                        <MDBBtn color="#ED5C5F" className="btnUpload" id="upload" onClick={this.navigate}>
                                        <MDBIcon icon="magic" className="mr-1" size="lg" /> Upload Question
                                        </MDBBtn>
                                    </div>
                                </MDBRow>
                            </div>
                        </div>
                    </MDBContainer>
                </div>
                <hr/>
                <Footer />
            </div>
        )
    }
}
