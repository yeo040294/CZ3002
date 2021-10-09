import React, { Component } from 'react'
import Navbar from '../../components/Patient/Navbar'
import Footer from '../../components/share/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCardText, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle } from 'mdbreact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDifficulty, startGame, addQuestionList } from '../../Redux/Actions/PatientAction';
import { fetchQuestion } from '../../Redux/Actions/QuestionAction';
import Cookies from 'js-cookie'
import '../../styling/index.css'
import '../../styling/home.css'
import AssignmentList from '../../components/Patient/AssignmentList'
import '../../styling/footer.css';

class patientHome extends Component {
    componentDidMount() {
        this.RetrieveQuestion()
    }
    RetrieveQuestion = () => {
        let sessionID = Cookies.get('sessionid')
        let userID = Cookies.get('userid')
        this.props.fetchDifficulty(sessionID, userID)
    }

    handleSubmit = (questionList, assignmentid) => {
        console.log(questionList) // successfully pass [1,2,3]
        let sessionid = Cookies.get('sessionid')
        this.props.addQuestionList(questionList)
        this.props.startGame(sessionid, assignmentid)
        questionList.map(questionid => {
            this.props.fetchQuestion(sessionid, questionid)
        })
        setTimeout(() => this.props.history.push('/patientGamepage'), 10000)
        
    }

    render() {
        let assignments = this.props.difficulty.assignments
        return (
            <div className="page-container">
            <div className="content-wrapper">
                <Navbar />
                <div className="header">
                    <p>Home</p>
                </div>
            {/* <br></br> */}
            <MDBContainer fluid>
                <div className="body">
                <MDBRow>
                    <MDBCol  className="content" md="8">
                        {/* <MDBCard>
                            <MDBCardBody> */}
                            <p className="h2 font-weight-bold">The doctor has assign you a game</p>
                            <br></br>
                            <p className="h4 font-weight-bold">ASSIGNMENT LIST : </p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            <p>Play</p>
                            {assignments && assignments.map(x => {
                                return (
                                    <AssignmentList assignment={assignment} submit = {this.handleSubmit}/>
                                    // <MDBContainer>
                                    //     <MDBRow>
                                    //         <MDBCol size="3">
                                    //             <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
                                    //                 <MDBCardHeader color="blue lighten-1">Assignment No. {x.assignmentid}</MDBCardHeader>
                                    //                 <MDBCardBody>
                                    //                     <MDBCardTitle>{x.questions}</MDBCardTitle>
                                    //                     <MDBCardText>
                                    //                         With supporting text below as a natural lead-in to additional
                                    //                         content.
                                    //                     </MDBCardText>
                                    //                 </MDBCardBody>
                                    //             </MDBCard>
                                    //         </MDBCol>
                                    //     </MDBRow>
                                    // </MDBContainer>
                                )
                            })}
                            <div className="text-center mt-4">
                                <MDBBtn className="mb-3">
                                    Play Game
                                </MDBBtn>
                            </div>
                            {/* </MDBCardBody>
                        </MDBCard> */}
                    </MDBCol>
                </MDBRow>
                </div>
            </MDBContainer>

                {/* <MDBContainer>
                    <p className="h2 font-weight-bold">The doctor has assign you a game</p>
                    <p className="h4 font-weight-bold">ASSIGNMENT LIST : </p>
                    {assignments && assignments.map(assignment => {
                        return (                          
                            <AssignmentList assignment={assignment} submit = {this.handleSubmit}/>
                        )
                    })}
                </MDBContainer> */}
            </div>
            {/* <Footer/> */}
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
export default connect(mapStateToProps, { fetchDifficulty, startGame, addQuestionList, fetchQuestion })(patientHome)