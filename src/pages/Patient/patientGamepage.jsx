import React, { Component } from 'react'
import Navbar from '../../components/share/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'; 

export default class patientGamepage extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                <Navbar/>
                <p  className="h2 font-weight-bold">Thank you for your participation</p>
                <br/>
                <p  className="h2 font-weight-bold">Your result is : </p>
            </MDBContainer>
            </div>

        )
    }
}
