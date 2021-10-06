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
      isIdentical: false  
    };
  }
  
  onChange = e => {
    this.setState({
      isIdentical: e.target.checked
    })
  }

  nextClickHandler = () => {

  }
  render() {
    return (
      <div>
          <img src={this.state.img_src1}/>
          <img src={this.state.img_src2}/>
          <p>Are the two shapes identical? </p>

          <div className="control">
            <label type="radio" name="answer">
              <input type="radio" name="answer" value="" onChange={() => {}} />
              Yes
            </label>
            <label type="radio" name="answer">
              <input type="radio" name="answer" value="" onChange={() => {}} />
              No
            </label>
          </div>
          <button className="button" onClick={this.nextClickHandler}> Next </button>
          {/* <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              checked={isIdentical}

            />
            <label class="form-check-label" for="flexRadioDefault1"> Yes </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2"> No </label> */}
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