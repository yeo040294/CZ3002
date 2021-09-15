import React, { Component } from 'react'
import Navbar from '../../components/share/Navbar'
import Footer from '../../components/share/Footer'
import Medical from '../../components/Medical/medical'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export default class medicalAssign extends Component {
    render() {
        return (
            <div>
                
              <Navbar/>
              <MDBContainer>
              <Medical/>
                  <MDBRow>
                        
              </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
