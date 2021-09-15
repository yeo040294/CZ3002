import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import Navbar from '../../components/Medical/Navbar';
import Footer from '../../components/share/Footer';
import ResultTable from '../../components/Patient/PatientResult/ResultTable';

export default class ViewPatientResults extends Component {
    state = {
        username: '',
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
        this.setState({
            username: this.props.history.location.pathname.split('/view')[0].replace('/', '')
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>

                    <h3>Patient: {this.state.username}</h3>
                    <hr/>
                    <ResultTable results={this.state.results}/>

                </MDBContainer>
                <Footer />;
            </div>
        )
    }
}
