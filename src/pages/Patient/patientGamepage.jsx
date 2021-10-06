import React, { Component } from 'react'
import Navbar from '../../components/share/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestion } from '../../Redux/Actions/QuestionAction';
import { startGame } from '../../Redux/Actions/PatientAction';

import Cookies from 'js-cookie'
import GameList from '../../components/Patient/GameList';

class patientGamepage extends Component {
    state = {
        questionList: [],
    }
    componentDidMount(){
        this.setState({
            questionList: this.props.questionList
        })
    }

    render() {
        console.log(this.props.question)
        console.log(this.props.questionList)
        return (
            <div>
                <MDBContainer>
                <Navbar/>
                <p  className="h2 font-weight-bold">Welcome to the game!</p>
                <br/>
                {this.state.questionList.map(questionid => {
                    return (
                        <div>  Question number  {questionid} 
                        {this.props.question === [] ?  <p>Loading question </p> : <GameList questionid={questionid} question={this.props.question}/>}
                        </div>
                    )
                })}


                
            <MDBBtn onClick={() => this.props.history.push("/patientResultpage")}> Submit </MDBBtn>

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
});
export default connect(mapStateToProps, { fetchQuestion, startGame })(patientGamepage)