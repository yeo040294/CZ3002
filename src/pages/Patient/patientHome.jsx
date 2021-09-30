import React, { Component } from 'react'
import Navbar from '../../components/Patient/Navbar'
import Footer from '../../components/share/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


export default class patientHome extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <MDBContainer>
                <p  className="h2 font-weight-bold">The doctor has assign you a game</p>
                <p className="h4 font-weight-bold">DIFFICULTY : </p>
                <MDBBtn href="#" color="primary">
        PLAY GAME
      </MDBBtn>
               </MDBContainer>
            </div>
        )
    }
}
