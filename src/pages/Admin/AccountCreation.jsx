import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import AccountForm from '../../components/Admin/AccountForm';
import Navbar from '../../components/Admin/Navbar';
import PropTypes from 'prop-types';
import { createAcc } from '../../Redux/Actions/UsersAction';
import Cookies from 'js-cookie'
import '../../styling/index.css';
import '../../styling/admin_create.css';

class AccountCreation extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        usertype: ''
    }
    onSubmit = (name, username, password, usertype) => {
        if ([name, username, password].some((x) => x === '') || usertype.includes("Select")) { alert("Please ensure that there are no empty inputs.") }
        else {
            let userrole = usertype == "Patient" ? "0" : usertype == "Medical" ? "1" : "2"
            let sessionID = Cookies.get('sessionid')
            let form = {
                sessionid: sessionID,
                displayname: name,
                username: username,
                password: password,
                role: userrole
            }
            this.props.createAcc(form);
            //need to add validation & response from server (success/user exists?)
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.result.status == 'success')
            this.props.history.push('/admin')
    }

    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer className="content">
                    <MDBRow>
                        <MDBCol  className="lForm" md="6">
                            <MDBCard>
                            <MDBCardBody className="mx-4">
                                <h2 className="h4 text-center py-4">Account Creation</h2>    
                                <AccountForm onSubmit={this.onSubmit} />
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

AccountCreation.propTypes = {
    createAcc: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    result: state.user.data,
});
export default connect(mapStateToProps, { createAcc })(AccountCreation)