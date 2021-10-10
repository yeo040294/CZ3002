import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbar from '../../components/Medical/Navbar'
import { MDBContainer, MDBBtn } from 'mdbreact';
export class AssignResult extends Component {
    
    render() {
        let data = this.props.patient
        console.log(data)
        return (
            <div>
                <Navbar/> 
                <MDBContainer>
                <h4>Questions assigned successful! </h4>
                <ul> Questions assigned: 
                    
                    {data && data.map(item => <li> {item} </li> )}
                
                 </ul>
                <a href='/medical'> Back to home page</a>

                </MDBContainer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    patient: state.patient.questionDisplay
});

export default connect(mapStateToProps) (AssignResult);
