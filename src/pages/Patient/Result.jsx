import React, { Component } from 'react'
import { MDBContainer } from 'mdbreact';
import Navbar from '../../components/Patient/Navbar';
import Footer from '../../components/share/Footer';
import ResultTable from '../../components/Patient/PatientResult/ResultTable';

export default class Result extends Component {
    state = {
        results:[
            {
                id: 1,
                difficulty: "Easy",
                score: "1",
                date: '',
                duration: '30 min'
            },
            {
                id: 2,
                difficulty: "Medium",
                score: "10",
                date: '',
                duration: '20 min'
            },
            {
                id: 3,
                difficulty: "Hard",
                score: "2",
                date: '',
                duration: '45 min'
            },
        ]
    }
    componentDidMount() {
        var d = new Date();
        d.toLocaleString();
        let results = this.state.results;
        results.forEach(x => x.date = d.toString());
        this.setState({results: results});
    }
    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>
                <h3>Patient result page</h3>
                <hr/>
                { this.state.results &&  <ResultTable results={this.state.results}/>}

                </MDBContainer>
                <Footer />;
            </div>
        )
    }
}
