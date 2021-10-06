import React, { Component } from 'react'
import Navbar from '../../components/Patient/Navbar'
import Footer from '../../components/share/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCardText, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle } from 'mdbreact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDifficulty } from '../../Redux/Actions/PatientAction';
import Cookies from 'js-cookie'


const AssignmentList = ({assignment, submit}) => {
    // let questionArray = assignment.questions.split("")
    let questionArray = JSON.parse(assignment.questions)
    return (
        <MDBContainer >
        <MDBRow>
            <MDBCol size="3">
                <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
                    <MDBCardHeader color="blue lighten-1">Assignment No. {assignment.assignmentid}</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>{assignment.questions}</MDBCardTitle>
                        <MDBCardText>
                            With supporting text below as a natural lead-in to additional
                            content.
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBBtn onClick={() => submit(questionArray, assignment.assignmentid)}>Play</MDBBtn>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    )
}

export default AssignmentList
