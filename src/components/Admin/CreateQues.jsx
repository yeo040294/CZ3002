import React, { Component, useState } from 'react';
import {MDBCard, MDBCardBody,  MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBInput, MDBCardImage, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import Navbar from './Navbar';
import PicUpload from '../share/PicUpload';
import '../../styling/admin_create.css';
import '../../styling/admin_createqn.css';
import '../../styling/index.css';

const CreateQues = ({ onSubmit }) => {
    const [difficultylevel, setDifficulty] = useState("Select difficulty");
    const [identical, setIdentical] = useState('1');
    const [picture1, setPicture1] = useState('null')
    const [picture2, setPicture2] = useState('null')

    return (
        <div>
            {/* <MDBCol md="12"> */}
                <MDBRow className="content-first">
                    <h6>Question Picture 1:</h6>
                    {/* <br /> */}
                    <div className="content-pic">
                        <PicUpload picUpload={x => setPicture1(x)} />
                        <div>
                            <MDBCard style={{ width: "22rem" }}>
                                <MDBCardImage className="img-fluid" src={[picture1]} waves />
                            </MDBCard>
                        </div>
                    </div>
                    <br /><br />
                </MDBRow>
                <MDBRow className="content-second">
                    <h6>Question Picture 2:</h6>
                    {/* <br /> */}
                    <div className="content-pic">
                        <PicUpload picUpload={x => setPicture2(x)} />
                        <div>
                            <MDBCard style={{ width: "22rem" }}>
                                <MDBCardImage className="img-fluid" src={[picture2]} waves />
                            </MDBCard>
                        </div>
                    </div>
                    <br />
                </MDBRow>
                <MDBRow className="content-third">
                    {/* <MDBCol md="4" className="db1"> */}
                        <h6>Difficulty:</h6>
                        <MDBDropdown className="content-dropDown1">
                            <MDBDropdownToggle value={difficultylevel} caret color="white">
                                {difficultylevel}
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic onClick={e => setDifficulty(e.target.value)} >
                                <MDBDropdownItem value={'0'}>Easy</MDBDropdownItem>
                                <MDBDropdownItem value={'1'}>Medium</MDBDropdownItem>
                                <MDBDropdownItem value={'2'}> Hard</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    {/* </MDBCol> */}
                </MDBRow>
                <MDBRow className="content-forth">
                    {/* <MDBCol md="4" className="db2"> */}
                        <h6>Identical:</h6>
                        <MDBDropdown className="content-dropDown2">
                            <MDBDropdownToggle value={identical} caret color="white">
                                {identical}
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic onClick={e => setIdentical(e.target.value)}>
                                <MDBDropdownItem value='1'>Yes</MDBDropdownItem>
                                <MDBDropdownItem value='0'>No</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                      {/* </MDBCol> */}
                </MDBRow>
                {/* <br /> */}
                <MDBRow className="content-btn">
                    <div className="text-center mt-4 containerBtn">
                        <MDBBtn color="#1FB4CA" className="mb-3 btnCreate" onClick={() => onSubmit(difficultylevel, picture1, picture2, identical)} >Submit</MDBBtn>
                    </div>
                </MDBRow>
            {/* </MDBCol> */}
        </div>
    )

}
export default CreateQues