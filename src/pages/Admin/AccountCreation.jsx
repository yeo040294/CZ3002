import { MDBContainer } from 'mdbreact';
import React, { Component } from 'react'
import AccountForm from '../../components/Admin/AccountForm';
import Navbar from '../../components/Admin/Navbar';
import Footer from '../../components/share/Footer';

export default class AccountCreation extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        usertype: ''
    }
    onSubmit = (name,username,password, usertype) => {
        console.log(name,username,password, usertype.includes('Select') ? "": usertype)
    }

    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>
                    <h3>Account Creation</h3>
                    <hr />
                    <AccountForm onSubmit={this.onSubmit}/>
                    </MDBContainer>
                <Footer />
            </div>
        )
    }
}
