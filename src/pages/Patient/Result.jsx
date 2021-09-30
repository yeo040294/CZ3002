import React, { Component } from 'react'
import { MDBContainer } from 'mdbreact';
import Navbar from '../../components/Patient/Navbar';
import ResultTable from '../../components/Patient/PatientResult/ResultTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchResults,test } from '../../Redux/Actions/QuestionAction';
import Cookies from 'js-cookie';

//Cookies.get("user")
//Cookies.set()

class Result extends Component {
    state = {
        results:[
            // {
            //     id: 1,
            //     difficulty: "Easy",
            //     score: "1",
            //     date: '',
            //     duration: '30 min'
            // },
            // {
            //     id: 2,
            //     difficulty: "Medium",
            //     score: "10",
            //     date: '',
            //     duration: '20 min'
            // },
            // {
            //     id: 3,
            //     difficulty: "Hard",
            //     score: "2",
            //     date: '',
            //     duration: '45 min'
            // },
        ]
    }
    componentDidMount() {
        // var d = new Date();
        // d.toLocaleString();
        // let results = this.state.results;
        // results.forEach(x => x.date = d.toString());
        // this.setState({results: results});
        Cookies.set('sessionid','1',{path:'/'})
        console.log("sessionid:", Cookies.get('sessionid'))
        // let form = {
        //     sessionid: Cookies.get('sessionid'),
        //     userid: 1
        // }
        // this.props.fetchResults(form)
        let form = {
            username: "test",
            password: "testpassword"
        }
        this.props.test(form)
    }
    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>
                <h3>Patient result page</h3>
                <hr/>
                { this.state.results &&  <ResultTable results={this.state.results}  />  }

                </MDBContainer>
            </div>
        )
    }
}
Result.propTypes = {
    fetchResults: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    results: state.quest.results,
});

export default connect(mapStateToProps, { fetchResults,test })(Result)