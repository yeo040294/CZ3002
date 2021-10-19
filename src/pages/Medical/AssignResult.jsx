import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbar from '../../components/Medical/Navbar'
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from 'mdbreact';
import Success from '../../assets/Done.svg'
import '../../styling/medical_home.css'

export class AssignResult extends Component {
    
    render() {
        let data = this.props.patient
        console.log(data)
        return (
            <div id="success-container">
                <div className="content-results">
                    <MDBRow id="first-content-results">
                        <MDBCol>
                            <div class="content-img">
                                <img src={Success} className="card-img-results" alt="img_Account"/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow id="second-content-results">
                        <h4>Questions assigned successful! </h4>
                    </MDBRow>
                    <MDBRow id="third-content-results">
                        <ul id="qns-assigned"> Questions assigned: 
                            &nbsp;
                            {data && data.map(item => <li> {item} </li> )}
                        </ul>
                    </MDBRow>
                    <MDBRow id="forth-content-results">
                        <a href='/medical' id="fbtn" class="btn homebtn"> Back to home page</a>
                    </MDBRow>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    patient: state.patient.questionDisplay
});

export default connect(mapStateToProps) (AssignResult);
