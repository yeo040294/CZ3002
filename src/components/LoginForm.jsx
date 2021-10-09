import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact'
import Navbar from '../components/share/Navbar'
import flipfloplogo from '../assets/FlipFlopLogo.png'
import '../styling/home.css';

export const LoginForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
        return (
            <MDBContainer className="bg">  
              {/* <Navbar />   */}

              <MDBRow>
                <MDBCol  className="lForm" md="6">
                  <MDBCard>
                    <MDBCardBody className="mx-4">
                    <div className="logo">
                      <img src={flipfloplogo} className="img-logo" alt="img_logo"/>
                    </div>
                    <hr/>
                      {/* <h2 className="h4 text-center py-4">Flip Flop</h2>     */}
                      <h4 className="title">Sign in </h4>
                      <p>Sign in to start image rotation!</p>
                      {/* <hr></hr> */}
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          value={username}
                          onChange={e => setUsername(e.target.value)}
                        />
                        <label className="pwd" htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="defaultFormCardNameEx"
                          className="form-control"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                        />
                      <div className="text-center mb-3">
                        <MDBBtn color="#1FB4CA" className="btn-block z-depth-1a btnSubmit" value="Submit" gradient="blue" rounded onClick={() => onSubmit(username,password)}>   Submit  </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          )
}