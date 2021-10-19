import React, { Component } from 'react'
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
import Navbar from '../../components/Patient/Navbar';
import Footer from '../../components/share/Footer';
import ResultTable from '../../components/Patient/PatientResult/ResultTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchResults } from '../../Redux/Actions/QuestionAction';
import {fetchUserInfo} from '../../Redux/Actions/UsersAction';
import Cookies from 'js-cookie';
import '../../styling/patient_results.css'

class Result extends Component {
    componentDidMount() {
        let sessionid = Cookies.get('sessionid')
        let userid = Cookies.get('userid')
        this.props.fetchUserInfo(sessionid, userid)
        // var d = new Date();
        // d.toLocaleString();
        // let results = this.state.results;
        // results.forEach(x => x.date = d.toString());
        // this.setState({results: results});
        this.props.fetchResults(Cookies.get('userid'),Cookies.get('sessionid'))
    }

    // componentDidUpdate(prevProps,prevState,snapShot){
    //     if (this.props.data !== prevProps.data){
    //         console.log(this.props.data)
    //     }
    // }
    render() {
        console.log(this.props.data)
        return (
            <div id="patient-result-container">
                <Navbar displayname={this.props.user.displayname}/>
                <div id="patient-result-content">
                    <div id="patient-result-header">
                        <MDBCol md="12" className="patient-result-text">
                            <p class="h1">Game Results</p>
                        </MDBCol>
                    </div>
                    <div id="patient-result-body">
                        <MDBContainer fluid>
                            <h3 className="body-text">My Results</h3>
                            <hr/>
                            { this.props.data &&  <ResultTable results={this.props.data.results}  />  }

                        </MDBContainer>
                    </div>
                </div>
                <hr/>
                <Footer />
            </div>
        )
    }
}
Result.propTypes = {
    fetchResults: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    data: state.quest.results,
    user: state.user.data,
});

export default connect(mapStateToProps, { fetchResults, fetchUserInfo })(Result)