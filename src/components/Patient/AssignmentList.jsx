import React, { Component } from 'react'
import Navbar from '../../components/Patient/Navbar'
import Footer from '../../components/share/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCardText, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle,MDBIcon } from 'mdbreact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDifficulty } from '../../Redux/Actions/PatientAction';
import Cookies from 'js-cookie'
import '../../styling/patient_home.css'


const AssignmentList = ({assignment, submit}) => {
    // let questionArray = assignment.questions.split("")
    let questionArray = JSON.parse(assignment.questions)
    return (
        <MDBContainer >
        <MDBRow>
            <MDBCol size="4">
                <MDBCard style={{ width: "100vh", marginTop: "10%", marginLeft: "35%" }}>
                    <MDBCardHeader className="content-asgn">Assignment No. {assignment.assignmentid}</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>The Questions ID are: {assignment.questions}</MDBCardTitle>
                        <MDBCardText>
                            Result will be computed after the end of the run
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBRow className='d-flex align-items-center mb-4'>
                        <div className='text-center col-md-12'>
                            <MDBBtn color="#ED5C5F" type='button' className='btn-block z-depth-2 btn-asgn' onClick={() => submit(questionArray, assignment.assignmentid)}>
                            <MDBIcon icon="dice" className="mr-1" size="lg" />  Play</MDBBtn>
                        </div>
                    </MDBRow>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    )
}

export default AssignmentList
