import { MDBContainer } from 'mdbreact';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import AccountForm from '../../components/Admin/AccountForm';
import Navbar from '../../components/Admin/Navbar';
import PropTypes from 'prop-types';
import {createAcc} from '../../Redux/Actions/UsersAction';
import Cookies from 'js-cookie'

class AccountCreation extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        usertype: ''
    }
    onSubmit = (name,username,password, usertype) => {
        if ([name,username,password].some((x)=> x==='') || usertype.includes("Select")) {alert("Please ensure that there are no empty inputs.")}
        else {
            let userrole = usertype == "Patient" ? "0" : usertype == "Medical" ? "1" : "2"
            let form = {
                sessionid: Cookies.get('sessionid'),
                displayname: name,
                username: username,
                password: password,
                role:userrole
            }
            //console.log(Cookies.get('sessionid'))
            this.props.createAcc(form);
            //need to add validation & response from server (success/user exists?)
        }
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
            </div>
        )
    }
}

AccountCreation.propTypes = {
    createAcc: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    data: state.user.status,
});
export default connect(mapStateToProps, { createAcc })(AccountCreation)