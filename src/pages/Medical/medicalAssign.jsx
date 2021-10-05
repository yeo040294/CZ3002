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
        userid: '',
        difficulty: 'Easy',
        questionType: 'Automatic'
    }
    checkValidUser = () => {
        // You don't need to put parameters in the link, that makes your life harder. You can just called cookies.get() from anywhere to and validate the role
        let role = Cookies.get('role')
        if(role != '1')
            this.props.history.push('/')
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

    AssignPatient = (username,userid) => {
        // let sessionid = Cookies.get('sessionid')
        // let userid = Cookies.get('userid')
        // const form = {
        //     sessionid,
        //     userid,
        //     ...this.state
        // }
        this.props.assignDifficulty(this.state.difficulty)
        if (this.state.questionType == "Automatic"){
            this.props.history.push("/"+ username + "/" + userid  + "/assign/auto")            
        }
        else {
            this.props.history.push("/"+ username +  "/" + userid  + "/assign/manual")  
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
                                <h5>Difficulty</h5>
                                <select className="browser-default custom-select" value={this.state.difficulty} onChange={this.handleDifficultyChange}>
                                    <option value="Eady" >Easy</option>
                                    <option value="Medium" >Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                                <br />
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