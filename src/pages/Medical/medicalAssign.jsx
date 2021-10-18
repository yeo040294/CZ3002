import React, { Component } from 'react'
import Navbar from '../../components/Medical/Navbar'
import Footer from '../../components/share/Footer'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
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
            <div id="container">
                <Navbar />
                <div id="header">
                    <MDBCol md="12" className="header">
                        <p class="h1">Assign Task</p>
                    </MDBCol>
                </div>
                <div id="body">
                    <MDBContainer fluid>
                        <MDBRow>
                            <MDBCol  className="content" md="8">
                                <MDBCard className="card-content">
                                    <form>
                                        <p className="h4 mb-4 text-left body-header">Assign Task for Patient</p>
                                        <div className="grey-text">
                                            <p className="h5 mb-4 text-left content-text">Difficulty: </p>
                                            <MDBRow id="select-content">
                                                <select className="browser-default custom-select" value={this.state.difficulty} onChange={this.handleDifficultyChange}>
                                                    <option value="Easy" >Easy</option>
                                                    <option value="Medium" >Medium</option>
                                                    <option value="Hard">Hard</option>
                                                </select>
                                            </MDBRow>
                                            <br />
                                            <MDBRow className='d-flex mb-4 btnContent'>
                                                <div className='text-center col-md-12 taskBtn'>
                                                    <MDBBtn color="#ED5C5F" type='button' id="task-asgn" className='btn-asgn' onClick={this.AssignPatient}>Confirm</MDBBtn>
                                                    {/* <MDBBtn color="#ED5C5F" type='button' className='btn-asgn'>Back</MDBBtn> */}
                                                    <a href="/medical" id="task-back" class="btn homebtn"> Back </a>
                                                </div>
                                            </MDBRow>
                                        </div>
                                    </form>
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

medicalAssign.propTypes = {
    assignDifficulty: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    result: state.patient.display,
});
export default connect(mapStateToProps, { assignDifficulty })(medicalAssign)