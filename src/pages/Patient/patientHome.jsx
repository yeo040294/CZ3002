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
import '../../styling/patient_home.css'
import AssignmentList from '../../components/Patient/AssignmentList'
import notify from '../../assets/notify.svg'
import loading from '../../assets/loading.svg'
import {fetchUserInfo} from '../../Redux/Actions/UsersAction';

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
        this.props.fetchUserInfo(sessionID, userID)
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
        console.log(assignments)
        if (this.state.isLoading) {
            return ( 
                <div className="content-loading">
                    <MDBRow>
                        <MDBCol>
                            <div class="img-content">
                                <img src={loading} className="card-img-top" alt="img_Account"/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    {/* <hr/> */}
                    <MDBRow>
                        <MDBCol md="1" className="spinner">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </MDBCol>
                        <MDBCol md="4">
                            <p className="loading-text"> Please wait, we are fetching the questions for you </p>
                        </MDBCol>
                    </MDBRow>
                </div>
            )
        }
        else if (assignments === undefined){
            return (
                <div id="container">
                    <Navbar displayname={this.props.data.displayname}/>
                        <div id="header">
                            <MDBCol md="12" className="header">
                                <p class="h1">Home</p>
                            </MDBCol>
                        </div>
                        <div id="body">
                            <MDBContainer fluid>
                                <MDBRow>
                                    <MDBCol  className="content" md="8">
                                        <MDBCard className="card-content">
                                            <MDBCardBody>
                                                <div class="top-content">
                                                    <img src={notify} className="card-img-top" alt="img_Account"/>
                                                </div>
                                                <p className="h2 font-weight-bold text">There is no assignment for you</p>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                    <Footer />
                </div>
            )
        }
        else {
        return (
            <div id="container">
                <Navbar displayname={this.props.data.displayname}/>
                <div id="header">
                    <MDBCol md="12" className="header">
                         <p class="h1">Home</p>
                    </MDBCol>
                </div>
                <div id="body">
                    <MDBContainer fluid>
                        <MDBRow>
                            <MDBCol  className="content" md="8">
                                <MDBCard className="card-content">
                                    <MDBCardBody>
                                    <p className="h2 font-weight-bold">The doctor has assigned you the following assignments</p>
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
                    </MDBContainer>
                </div>
                <hr/>
                <Footer />                            
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
    data: state.user.data
});
export default connect(mapStateToProps, { fetchDifficulty, startGame, addQuestionList, fetchQuestion, fetchUserInfo})(patientHome)