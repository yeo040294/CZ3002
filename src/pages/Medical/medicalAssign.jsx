import React, { Component } from 'react'
import Navbar from '../../components/Medical/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { assignPatient } from '../../Redux/Actions/PatientAction';
import Cookies from 'js-cookie'

class medicalAssign extends Component {
    state = {
        username: '',
        name: '',
        difficulty: 'easy',
        questionType: 'Automatic',
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
    AssignPatient = () => {
        let sessionid = Cookies.get('sessionid')
        let userid = Cookies.get('userid')
        const form = {
            sessionid,
            userid,
            ...this.state
        }
        this.props.assignPatient(form)
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
                                <MDBDropdown>
                                    <MDBDropdownToggle caret color="primary">
                                        Easy
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic >
                                        <MDBDropdownItem>easy</MDBDropdownItem>
                                        <MDBDropdownItem>medium</MDBDropdownItem>
                                        <MDBDropdownItem>hard</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                <h5>Select Question Type</h5>
                                <MDBDropdown>
                                    <MDBDropdownToggle caret color="primary">
                                        Automatic
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic >
                                        <MDBDropdownItem>Automatic</MDBDropdownItem>
                                        <MDBDropdownItem>Manual</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
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
    assignPatient: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    result: state.patient.display,
});
export default connect(mapStateToProps, { assignPatient })(medicalAssign)