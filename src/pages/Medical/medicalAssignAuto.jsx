import React, { Component } from 'react'
import Navbar from '../../components/Medical/Navbar'
import Medical from './MedicalHome'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllQuestion } from '../../Redux/Actions/QuestionAction'
import { assignPatient, assignQuestionList} from '../../Redux/Actions/PatientAction'
import { QuestionList } from '../../components/Medical/QuestionList';
import Cookies from 'js-cookie';

class medicalAssignAuto extends Component {
    state = {
        difficulty:0
    }
    componentDidMount() {        
        if (this.props.difficulty == "Medium"){
            this.setState({
                difficulty: 1
            })
        }
        else if (this.props.difficulty == "Hard"){
            this.setState({
                difficulty: 2
            })        
        }
        this.props.fetchAllQuestion(this.state.difficulty, Cookies.get("userid"), Cookies.get("sessionid"),); //0 for easy, 1 for medium, 3 for hard
    }

    handleSubmit = (questionList) => {
        let sessionid = Cookies.get('sessionid')
        this.props.assignQuestionList(questionList)
        this.props.assignPatient(this.props.uuid, questionList, sessionid, this.state.difficulty);
        this.props.history.push("/medical/assign/result") 
    }

    autoAssign = () => {
        let questionList = []
        let len = this.props.data.questions.length
        while (questionList.length < len/2) {
            let questionNumber = Math.floor(Math.random() * len);
            let questionString = questionNumber.toString()
            if (!questionList.includes(questionString) && questionString !== "0") {
                questionList.push(questionString)
            }
        }
        this.props.assignQuestionList(questionList)
        this.props.assignPatient(this.props.uuid, questionList, Cookies.get('sessionid'), this.state.difficulty);
        this.props.history.push("/medical/assign/result")
    }
    render() {
        return (
            <div id="container">
                <Navbar />
                <div id="header">
                    <MDBCol md="12" className="header">
                        <p class="h1">Assign Task</p>
                    </MDBCol>
                </div>
                <div id="body">
                    <MDBContainer fluid>                 
                        <h4>Difficulty level: {this.props.difficulty}</h4>
                        <MDBBtn onClick={this.autoAssign} color="#ED5C5F" type='button' className='btn-asgn'>Auto assign</MDBBtn>
                        <hr/>
                        <h5>Manual Assignment</h5>
                        <br/>
                        {this.props.data && <QuestionList data={this.props.data.questions} submit = {this.handleSubmit}/>}
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

medicalAssignAuto.propTypes = {
    fetchAllQuestion: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    data: state.quest.questions,
    difficulty: state.patient.difficulty,
    uuid: state.patient.uuid
});

export default connect(mapStateToProps, { fetchAllQuestion, assignPatient, assignQuestionList }) (medicalAssignAuto);