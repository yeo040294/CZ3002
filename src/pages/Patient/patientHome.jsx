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

class patientHome extends Component {
    constructor(props) {
        super(props)   
        this.state = {
            isLoading: false
        }
      }  
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
        setTimeout(() => this.props.history.push('/patientGamepage'), 3000)
        this.setState({
            isLoading: true
        })
        
    }

    render() {
        let assignments = this.props.difficulty.assignments
        if (this.state.isLoading) {
            return ( 
                <div>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <p> Please wait, we are fetching the questions for you </p>
                </div>
            )
        }
        else {
        return (
            <div>
                <Navbar />
                <div className="header">
                    <p>Home</p>
                </div>
                {/* <br></br> */}
                <MDBContainer fluid>
                    <div className="body">
                    <MDBRow>
                        <MDBCol  className="content" md="8">
                            <MDBCard>
                                <MDBCardBody>
                                <p className="h2 font-weight-bold">The doctor has assign you a game</p>
                                <br></br>
                                <p className="h4 font-weight-bold">ASSIGNMENT LIST :</p>
                                {assignments && assignments.map(assignment => {
                                    return (
                                      <AssignmentList assignment={assignment} submit = {this.handleSubmit}/>
                                    )
                                })}
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    </div>
                </MDBContainer>
            </div> 
        )
        }
    }
}

patientHome.propTypes = {
    fetchDifficulty: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    difficulty: state.patient.display,
});
export default connect(mapStateToProps, { fetchDifficulty, startGame, addQuestionList, fetchQuestion })(patientHome)