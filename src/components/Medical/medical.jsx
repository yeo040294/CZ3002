import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

class Medical extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <p className="h3 text-center mb-4">Assign Task for Patient</p>
                                <div className="grey-text">
                                    <MDBInput label="Username" icon="user" group type="text" validate error="wrong"
                                        success="right" />
                                    <MDBInput label="Name" icon="user-tie" group type="email" validate error="wrong"
                                        success="right" />
                                    <h5>Difficulty</h5>
                                        <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          Easy
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic >
          <MDBDropdownItem>easy</MDBDropdownItem>
          <MDBDropdownItem>medium</MDBDropdownItem>
          <MDBDropdownItem>hard</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <h5>Select Question Type</h5>
                                        <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          Automatic
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic >
          <MDBDropdownItem>Automatic</MDBDropdownItem>
          <MDBDropdownItem>Manual</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <br/>
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