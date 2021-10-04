import React, { Component } from 'react'
import Navbar from '../../components/Medical/Navbar'
import Medical from './MedicalHome'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllQuestion } from '../../Redux/Actions/QuestionAction'
import { QuestionList } from '../../components/Medical/QuestionList';
import Cookies from 'js-cookie';

class medicalAssignAuto extends Component {
    componentDidMount() {
        let difficulty = 0
        if (this.props.patient == "Medium"){
            difficulty = 1
        }
        else if (this.props.patient == "Hard"){
            difficulty = 2
        }
        this.props.fetchAllQuestion(difficulty ,Cookies.get("sessionid"), Cookies.get("userid")); //0 for easy, 1 for medium, 3 for hard
    }

    confirm(data, questionList){
        this.props.assignQuestion(data, questionList)
    }

    render() {
        return (
            <div>
                
              <Navbar/>
              <MDBContainer>
                <h1>Difficulty level: {this.props.patient}</h1>
              {this.props.data && <QuestionList data={this.props.data.questions} confirm = {this.confirm}/>}

              </MDBContainer>
            </div>
        )
    }
}

medicalAssignAuto.propTypes = {
    fetchAllUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    data: state.quest.questions,
    patient: state.patient.difficulty
});

export default connect(mapStateToProps, { fetchAllQuestion }) (medicalAssignAuto);