import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';
import Cookies from 'js-cookie';
import { fetchQuestion } from '../../Redux/Actions/QuestionAction';
import { connect } from 'react-redux';

class GameList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.questionid,
      question: props.question,
      img_src1: "data:image/jpeg;base64," + props.question.questions[props.questionid-1].qnimg1,
      img_src2: "data:image/jpeg;base64," + props.question.questions[props.questionid-1].qnimg2 ,
      answer: 1 
    };
  }
  

  render() {
    return (
      <div>
          <img src={this.state.img_src1}/>
          <img src={this.state.img_src2}/>
          <p>Are the two shapes identical? </p>

          <div className="control">
            <label type="radio" name="answer">
              <input type="radio" name="answer" value="" onChange={() => {this.setState({answer: 1})}} />
              Yes
            </label>
            <label type="radio" name="answer">
              <input type="radio" name="answer" value="" onChange={() => {this.setState({answer: 0})}} />
              No
            </label>
          </div>
          <button className="button" onClick={this.props.onClickNext("Answer")}> Next </button>
            <br/>
            <br/>
          </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // questions: state.quest.questionDetail,
});

export default connect(mapStateToProps, { fetchQuestion })(GameList)