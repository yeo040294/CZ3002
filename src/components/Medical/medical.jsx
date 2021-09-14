import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class Medical extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <p className="h5 text-center mb-4">Assign Task for Patient</p>
                                <div className="grey-text">
                                    <MDBInput label="Username" icon="user" group type="text" validate error="wrong"
                                        success="right" />
                                    <MDBInput label="Name" icon="user-tie" group type="email" validate error="wrong"
                                        success="right" />
                                    <MDBInput label="Diffculty" icon="star" group type="text" validate
                                        error="wrong" success="right" />
                                    <MDBInput label="Select Question type" icon="lock" group type="password" validate />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="primary">Confirm</MDBBtn>
                                    <MDBBtn color="primary">Back</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Medical;