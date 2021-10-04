import React, { Component, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import Navbar from './Navbar';
import PicUpload from '../share/PicUpload';

const CreateQues = ({ onSubmit }) => {
    const [difficultylevel, setDifficulty] = useState("Select difficulty");
    const [identical, setIdentical] = useState('Yes');
    const [picture1, setPicture1] = useState('')
    const [picture2, setPicture2] = useState('')

    return (
        <div>
            <Navbar />
            <MDBContainer>
                <MDBCol md="6">
                    <h5>Difficulty</h5>
                    <MDBDropdown>
                        <MDBDropdownToggle value={difficultylevel} caret color="primary">
                            {difficultylevel}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic onClick={e => setDifficulty(e.target.value)} >
                            <MDBDropdownItem value={'Easy'}>Easy</MDBDropdownItem>
                            <MDBDropdownItem value={'Medium'}>Medium</MDBDropdownItem>
                            <MDBDropdownItem value={'Hard'}> Hard</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    <h5>Question</h5>
                   
                    <PicUpload picUpload={x => setPicture1(x)} />
                    <br />
                    <h5>Answer</h5>
                  
                    <PicUpload picUpload={x => setPicture2(x)} />
                   
                    <h5>Identical?</h5>
                    <MDBDropdown>
                        <MDBDropdownToggle value={identical} caret color="primary">
                            {identical}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic onClick={e => setIdentical(e.target.value)}>
                            <MDBDropdownItem value={'Yes'}>Yes</MDBDropdownItem>
                            <MDBDropdownItem value={'No'}>No</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    <br />
                    <MDBBtn color="primary" onClick={() => onSubmit(difficultylevel, picture1, picture2, identical)} >Set</MDBBtn>
                    <MDBBtn color="primary">Back</MDBBtn>


                </MDBCol>
                <MDBRow>
                </MDBRow>
            </MDBContainer>
        </div>
    )

}
export default CreateQues