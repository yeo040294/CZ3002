import React, { Component } from 'react'
import Navbar from '../../components/Medical/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { assignPatient, assignDifficulty } from '../../Redux/Actions/PatientAction';
import Cookies from 'js-cookie'

class medicalAssign extends Component {
    state = {
        username: '',
        name: '',
        difficulty: 'Easy',
        questionType: 'automatic'
    }
    checkValidUser = () => {
        // You don't need to put parameters in the link, that makes your life harder. You can just called cookies.get() from anywhere to and validate the role
        let role = Cookies.get('role')
        if(role != 1)
            this.props.history.push('/')
    }

    componentDidMount(){
        this.checkValidUser()
    }

    textChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    onClickHandler = event => {
        const value = event.target.innerHTML;
        this.setState({ value })
      }

    handleDifficultyChange = (event) => {
        this.setState({
          difficulty: event.target.value
        })
      }

    handleQuestionTypeChange = (event) => {
        this.setState({
          questionType: event.target.value
        })
    }

    AssignPatient = (username,uid) => {
        // let sessionid = Cookies.get('sessionid')
        // let userid = Cookies.get('userid')
        // const form = {
        //     sessionid,
        //     userid,
        //     ...this.state
        // }
        this.props.assignDifficulty(this.state.difficulty)
        if (this.state.questionType == "automatic"){
            this.props.history.push("/"+ username + `/${uid}`  + "/assign/auto")            
        }
        else {
            this.props.history.push("/"+ username + `/${uid}`  + "/assign/manual")  
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.result.status == 'success')
            this.props.history.push('/patient')
    }

    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>
                    <MDBCol md="6">
                        <form>
                            <p className="h3 text-center mb-4">Assign Task for Patient</p>
                            <div className="grey-text">
                                <MDBInput label="Username" onChange={this.textChange} id="username" icon="user" group type="text" validate error="wrong"
                                    success="right" />
                                <MDBInput label="Name" id="name" onChange={this.textChange} icon="user-tie" group type="email" validate error="wrong"
                                    success="right" />
                                <h5>Difficulty</h5>
                                {/* <MDBDropdown>
                                    <MDBDropdownToggle caret color="primary" >
                                        {this.state.difficulty}
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic >
                                        <MDBDropdownItem active={this.state.difficulty === "easy"} onClick={this.onClickHandler}>Easy</MDBDropdownItem>
                                        <MDBDropdownItem active={this.state.difficulty === "medium"} onClick={this.onClickHandler}>Medium</MDBDropdownItem>
                                        <MDBDropdownItem active={this.state.difficulty === "hard"} onClick={this.onClickHandler}>Hard</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown> */}
                                <select className="browser-default custom-select" value={this.state.difficulty} onChange={this.handleDifficultyChange}>
                                    <option value="Eady" >Easy</option>
                                    <option value="Medium" >Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                                <h5>Select Question Type</h5>
                                {/* <MDBDropdown>
                                    <MDBDropdownToggle caret color="primary" >
                                        {this.state.questionType}
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic  >
                                        <MDBDropdownItem > Automatic</MDBDropdownItem>
                                        <MDBDropdownItem value="manual" onChange={this.handleQuestionTypeChange}>Manual</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown> */}
                                <select className="browser-default custom-select" value={this.state.questionType} onChange={this.handleQuestionTypeChange}>
                                    <option value="Automatic" >Automatic</option>
                                    <option value="Manual" >Manual</option>

                                </select>
                                <br />
                                <MDBBtn onClick={this.AssignPatient} color="primary">Confirm</MDBBtn>
                                <MDBBtn color="primary">Back</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                    <MDBRow>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

medicalAssign.propTypes = {
    assignDifficulty: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    result: state.patient.display,
});
export default connect(mapStateToProps, { assignDifficulty })(medicalAssign)