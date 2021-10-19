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

    var qnString = assignment.questions
    var qnArray = qnString.split(",").length

    return (
        <MDBContainer fluid>
        <MDBRow>
            <div class="col-sm-9" id="asgn-main-container">
                <div class="card">
                    <div class="card-body asgn-card-body">
                        <div class="card-header asgn-card-header">Assignment No. {assignment.assignmentid}</div>
                        <br/>
                        <div class="card-title asgn-card-title">Number of questions: {qnArray}</div>
                        <div class="card-text asgn-card-text">
                            <br/>
                            Result will be computed after the end of the run
                            <br/><br/>
                            <div className='text-center col-md-12'>
                                <MDBBtn color="#ED5C5F" type='button' className='btn-block z-depth-2 btn-asgn' onClick={() => submit(questionArray, assignment.assignmentid)}>
                                <MDBIcon icon="dice" className="mr-1" size="lg" />  Play</MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MDBRow>
        </MDBContainer>
    )
}

export default AssignmentList
