import React, { Component } from 'react'
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
import Navbar from '../../components/Patient/Navbar';
import Footer from '../../components/share/Footer';
import ResultTable from '../../components/Patient/PatientResult/ResultTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchResults } from '../../Redux/Actions/QuestionAction';
import Cookies from 'js-cookie';
import '../../styling/patient_home.css'

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
            <div id="container">
                <Navbar />
                <div id="header">
                    <MDBCol md="12" className="header">
                         <p class="h1">Game Results</p>
                    </MDBCol>
                </div>
                <div id="body">
                    <MDBContainer fluid>
                        <h3 className="body-text">My Results</h3>
                        <hr/>
                        { this.props.data &&  <ResultTable results={this.props.data.results}  />  }

                    </MDBContainer>
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
});

export default connect(mapStateToProps, { fetchResults })(Result)