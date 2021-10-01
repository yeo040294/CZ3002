import React, { Component } from 'react'
import { MDBContainer } from 'mdbreact';
import Navbar from '../../components/Patient/Navbar';
import ResultTable from '../../components/Patient/PatientResult/ResultTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchResults } from '../../Redux/Actions/QuestionAction';
import Cookies from 'js-cookie';

class Result extends Component {
    componentDidMount() {
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
        return (
            <div>
                <Navbar />
                <MDBContainer>
                <h3>Patient result page</h3>
                <hr/>
                { this.props.data &&  <ResultTable results={this.props.data.results}  />  }

                </MDBContainer>
            </div>
        )
    }
}
Result.propTypes = {
    fetchResults: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    data: state.quest.results,
});

export default connect(mapStateToProps, { fetchResults })(Result)