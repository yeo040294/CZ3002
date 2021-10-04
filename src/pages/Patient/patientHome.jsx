import React, { Component } from 'react'
import Navbar from '../../components/Patient/Navbar'
import Footer from '../../components/share/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCardText, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle } from 'mdbreact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDifficulty } from '../../Redux/Actions/PatientAction';
import Cookies from 'js-cookie'


class patientHome extends Component {
    componentDidMount() {
        this.RetrieveQuestion()
    }
    RetrieveQuestion = () => {
        let sessionID = Cookies.get('sessionid')
        let userID = Cookies.get('userid')
        this.props.fetchDifficulty(sessionID, userID)
    }
    render() {
        let assignments = this.props.difficulty.assignments
        return (
            <div>
                <Navbar />
                <MDBContainer>
                    <p className="h2 font-weight-bold">The doctor has assign you a game</p>
                    <p className="h4 font-weight-bold">DIFFICULTY : </p>
                    {assignments && assignments.map(x => {
                        return (
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol size="3">
                                        <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
                                            <MDBCardHeader color="blue lighten-1">Assignment No. {x.assignmentid}</MDBCardHeader>
                                            <MDBCardBody>
                                                <MDBCardTitle>{x.questions}</MDBCardTitle>
                                                <MDBCardText>
                                                    With supporting text below as a natural lead-in to additional
                                                    content.
                                                </MDBCardText>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        )
                    })}
                    <MDBBtn color="primary">
                        PLAY GAME
                    </MDBBtn>
                </MDBContainer>
            </div>
        )
    }
}

patientHome.propTypes = {
    fetchDifficulty: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    difficulty: state.patient.display,
});
export default connect(mapStateToProps, { fetchDifficulty })(patientHome)