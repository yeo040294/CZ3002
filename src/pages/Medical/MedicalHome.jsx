import React, { Component } from 'react'
import Card from '../../components/Card';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchAllUser } from '../../Redux/Actions/UsersAction'
import Navbar from '../../components/Medical/Navbar';
import Footer from '../../components/share/Footer'
import PatientList from '../../components/Medical/PatientList';
import Cookies from 'js-cookie';
import { assignUserid } from '../../Redux/Actions/PatientAction';
import '../../styling/medical_home.css';
import {fetchUserInfo} from '../../Redux/Actions/UsersAction';


class MedicalHome extends Component {
    componentDidMount() {
        this.props.fetchAllUser(0, Cookies.get("sessionid")); //0 for patient, 1 for medical, 2 for admin
    }
    assign = (username, uid) => {
        this.props.assignUserid(uid)
        this.props.history.push("/" + username + `/${uid}` + "/assign");
    }

    view = (username, uid) => {
        this.props.history.push("/" + username + `/${uid}` + "/view");
    }

    render() {
        let result = this.props.display.users
        console.log(result)
        return (
            <div id="medical-container">
                <Navbar />
                <div id="medical-content">
                    <div id="medical-header">
                        <MDBCol md="12" className="medical-header">
                            <p class="h1">Home</p>
                        </MDBCol>
                    </div>
                    <div id="medical-body">
                        <MDBContainer fluid>
                            <h3 className="body-text">Patient List</h3>
                            {/* Medical home page (with patient list) */}

                            {result !== undefined && <PatientList data={result} assign={this.assign} view={this.view} />}
                        </MDBContainer>
                    </div>
                </div>
                <hr/>
                <Footer />
            </div>
        )
    }
}
MedicalHome.propTypes = {
    fetchAllUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    display: state.user.data,
    uuid: state.patient.uuid
});

export default connect(mapStateToProps, { fetchAllUser, assignUserid })(MedicalHome);