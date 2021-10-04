import React, { Component } from 'react'
import Navbar from '../../components/Medical/Navbar'
import Medical from './MedicalHome'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export default class medicalAssignManual extends Component {
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
