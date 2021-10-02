import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import Navbar from '../../components/Medical/Navbar';
import ResultTable from '../../components/Patient/PatientResult/ResultTable';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import {fetchResults} from '../../Redux/Actions/QuestionAction';

class ViewPatientResults extends Component {
    state = {
        username: '',
        userid: ''
    }
    componentDidMount() {
        this.setState({
            username: this.props.history.location.pathname.split('/')[1],
            userid:this.props.history.location.pathname.split('/')[2]
        })
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        if (this.state.userid !== prevState.userid){
            this.props.fetchResults(this.state.userid, Cookies.get('sessionid'))
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>

                    <h3>Patient: {this.state.username}</h3>
                    <hr />
                    {this.props.data && <ResultTable results={this.props.data.results} />}

                </MDBContainer>
            </div>
        )
    }
}

ViewPatientResults.propTypes = {
    fetchResults: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    data: state.quest.results,
});
export default connect(mapStateToProps, { fetchResults })(ViewPatientResults)