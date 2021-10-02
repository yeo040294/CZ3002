import React, { Component } from 'react'
import Navbar from '../../components/share/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPatientResult } from '../../Redux/Actions/PatientAction';
import Cookies from 'js-cookie'

class patientGamepage extends Component {
    componentDidMount(){
        this.RetrieveData()
    }
    RetrieveData = () => {
        let sessionid = Cookies.get('sessionid')
        let userid = Cookies.get('userid')
        this.props.fetchPatientResult(sessionid,userid)
    }
    render() {
        let result = this.props.result.results
        console.log(result)
        return (
            <div>
                <MDBContainer>
                <Navbar/>
                <p  className="h2 font-weight-bold">Thank you for your participation</p>
                <br/>
                <p  className="h2 font-weight-bold">Your result is : </p>
            </MDBContainer>
            </div>

        )
    }
}
patientGamepage.propTypes = {
    fetchPatientResult: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    result: state.patient.display,
});
export default connect(mapStateToProps, { fetchPatientResult })(patientGamepage)