// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { MDBInputGroup, MDBInput, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBRow, MDBBtn } from 'mdbreact';
import '../../styling/admin_create.css';

const AccountForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usertype, setUsertype] = useState('Select User Type');


    return (
        <div>
            <MDBInput value={name} label="Name" icon="address-card" onChange={e => setName(e.target.value)} />
            <MDBInput value={username}label="Username" icon="user-circle" onChange={e => setUsername(e.target.value)}/>
            <MDBInput type="password" value={password} label="Password" icon="unlock-alt" onChange={e => setPassword(e.target.value)} />
            <MDBRow className="content-row1">
                <p>User Account Type:</p>
                <MDBDropdown className="content-dropDown">
                    <MDBDropdownToggle value={usertype} caret color="white">
                        {usertype}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic onClick={ e => setUsertype(e.target.value)}>
                        <MDBDropdownItem value={'Patient'} >Patient</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem value={'Medical'}>Medical</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBRow>
            <MDBRow className="content-btn">
                <div className="text-center mt-4" id="admin-cr-btn1">
                    <MDBBtn color="#1FB4CA" className="mb-3 btnSubmit" onClick={() => onSubmit(name, username,password,usertype)} >Submit</MDBBtn>
                    <MDBBtn className="mb-3 btnClear" color="#ED5C5F" onClick={() => {setName(''); setUsername('');setPassword(''); setUsertype('Select User Type')}} >Clear</MDBBtn>
                </div>
                <div className="text-center mt-4" id="admin-cr-btn2">
                    {/* <MDBBtn className="mb-3 btnClear" color="#ED5C5F" onClick={() => {setName(''); setUsername('');setPassword(''); setUsertype('Select User Type')}} >Clear</MDBBtn> */}
                </div>
            </MDBRow>
        </div>
    )
}

export default AccountForm
