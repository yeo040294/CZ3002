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


class MedicalHome extends Component {
    componentDidMount() {
        this.props.fetchAllUser(0,Cookies.get("sessionid")); //0 for patient, 1 for medical, 2 for admin
    }
    assign = (username,uid) => {
        this.props.assignUserid(uid)
        this.props.history.push("/"+ username + `/${uid}`  + "/assign");
    }

    view = (username,uid) => {
        this.props.history.push("/"+ username + `/${uid}` + "/view");
    }

    ComponentDidUpdate(prevProps,prevState,snapShot) {
        if (prevProps != this.props) {
            console.log(this.props)
            }
        } 

    render() {
        // console.log(this.props.data)
        return (
            <div>
                <Navbar/> 
                <MDBContainer>
                    Medical home page (with patient list)

                {this.props.display.length && <PatientList data={this.props.display.users[0].username} assign = {this.assign} view = {this.view}/>}
                </MDBContainer>
            </div>
        )
    }
}
MedicalHome.propTypes = {
    fetchAllUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    display: state.user.data
});

export default connect(mapStateToProps, { fetchAllUser, assignUserid}) (MedicalHome);