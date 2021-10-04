import React, { Component } from 'react';
import Navbar from '../../components/Admin/Navbar';
import Footer from '../../components/share/Footer';
import { MDBContainer, MDBCard , MDBCardImage, MDBCardBody, MDBCardTitle,MDBCardText} from 'mdbreact';

export default class UploadQuestion extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>
                <h3>Question Upload & Creation</h3>
                <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid"  waves />
        <MDBCardBody>
          <MDBCardTitle></MDBCardTitle>
          <MDBCardText>
            Email: <br />
                Tutorial Group: 
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
                <hr />
                </MDBContainer>
            </div>

        )
    }
}
