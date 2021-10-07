import React, { Component } from 'react'
import Navbar from '../../components/share/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestion } from '../../Redux/Actions/QuestionAction';
import { startGame } from '../../Redux/Actions/PatientAction';
import App from './App'
import Cookies from 'js-cookie'
import GameList from '../../components/Patient/GameList';

class patientGamepage extends Component {
    render() {
        console.log(this.props.question)
        console.log(this.props.questionList)
        console.log(this.props.assignments)
        let sessionid = Cookies.get('sessionid')
        let assignment = this.props.assignments[0]
        return (
            <div>
                <MDBContainer>
                <Navbar/>
                <App questionData = {this.props.question.questions} questionList={this.props.questionList}
                    sessionid={sessionid} assignmentid={assignment.assignmentid} anstoken={assignment.anstoken} />
                <br/>
            </MDBContainer>
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
    assignments: state.patient.assignment.assignments //array(1)
});
export default connect(mapStateToProps, { })(patientGamepage)