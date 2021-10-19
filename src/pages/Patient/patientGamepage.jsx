import React, { Component } from 'react'
import Navbar from '../../components/Patient/Navbar'
import Footer from '../../components/share/Footer'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestion } from '../../Redux/Actions/QuestionAction';
import { startGame } from '../../Redux/Actions/PatientAction';
import App from './App'
import Cookies from 'js-cookie'
import GameList from '../../components/Patient/GameList';
import '../../styling/patient_game.css';
import {fetchUserInfo} from '../../Redux/Actions/UsersAction';

class patientGamepage extends Component {
    componentDidMount() {
        this.RetrieveQuestion()
    }
    RetrieveQuestion = () => {
        let sessionID = Cookies.get('sessionid')
        let userID = Cookies.get('userid')
        this.props.fetchUserInfo(sessionID, userID)
    }

    render() {
        console.log(this.props.question)
        console.log(this.props.questionList)
        console.log(this.props.assignments)
        let sessionid = Cookies.get('sessionid')
        let assignment = this.props.assignments[0]
        return (
            <div id="game-container">
                <Navbar displayname={this.props.data.displayname}/>
                <div id="game-content">
                    <div id="game-header">
                        <MDBCol md="12" className="game-header">
                            <p class="h1">Welcome to the game!</p>
                        </MDBCol>
                    </div>
                    <div id="game-main-body">
                        <MDBContainer fluid>
                        <App questionData = {this.props.question.questions} questionList={this.props.questionList}
                            sessionid={sessionid} assignmentid={assignment.assignmentid} anstoken={assignment.anstoken} />
                        <br/>
                        </MDBContainer>
                    </div>
                </div>
                <hr/>
                <Footer />
            </div>

        )
    }
}
patientGamepage.propTypes = {
    fetchQuestion: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    questionList: state.patient.questionList,
    question: state.quest.questionDetail,
    assignments: state.patient.assignment.assignments,
    data: state.user.data
    //array(1)
});
export default connect(mapStateToProps, {fetchUserInfo })(patientGamepage)