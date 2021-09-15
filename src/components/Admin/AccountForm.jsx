// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { MDBInputGroup, MDBInput, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBRow, MDBBtn } from 'mdbreact';


const AccountForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usertype, setUsertype] = useState('Select User Type');


    return (
        <div>
            <MDBInput value={name} label="Name" icon="address-card" onChange={e => setName(e.target.value)} />
            <MDBInput value={username}label="Username" icon="user-circle" onChange={e => setUsername(e.target.value)}/>
            <MDBInput value={password} label="Password" icon="unlock-alt" onChange={e => setPassword(e.target.value)} />
            <MDBRow>
                User Account Type:
                <MDBDropdown size="sm">
                    <MDBDropdownToggle value={usertype} caret color="primary">
                        {usertype}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic onClick={ e => setUsertype(e.target.value)}>
                        <MDBDropdownItem value={'Patient'} >Patient</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem value={'Medical'}>Medical</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                <MDBBtn outline color="success" size="sm" onClick={() => onSubmit(name, username,password,usertype)} >Submit</MDBBtn>
                <MDBBtn outline color="danger" size="sm" onClick={() => {setName(''); setUsername('');setPassword(''); setUsertype('Select User Type')}} >Clear</MDBBtn>
            </MDBRow>
        </div>
    )
}

export default AccountForm
