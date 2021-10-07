import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact'

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
                      <h2 className="h4 text-center py-4">Flip Flop</h2>    
                      <p className="title">Login </p>
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
                      <div className="text-center mt-4">
                      <MDBBtn color="#1FB4CA" className="btnSubmit" size="sm" onClick={() => onSubmit(username,password)}>   Submit  </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          )
}