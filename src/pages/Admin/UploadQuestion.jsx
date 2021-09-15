import React, { Component } from 'react';
import Navbar from '../../components/Admin/Navbar';
import Footer from '../../components/share/Footer';
import { MDBContainer } from 'mdbreact';

export default class UploadQuestion extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>
                <h3>Question Upload & Creation</h3>
                <hr />
                </MDBContainer>
                <Footer />
            </div>

        )
    }
}
