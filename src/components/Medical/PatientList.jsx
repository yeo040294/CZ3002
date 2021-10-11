import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn } from 'mdbreact';
import '../../styling/medical_home.css';

const patientList = ({ data, assign, view }) => {

    return (
        <div>
            <MDBTable striped>
                <MDBTableHead className="table-head" color="#00acc1 cyan darken-1" textWhite>
                    <tr>
                        <th>User Name</th>
                        <th>Name</th>
                        <th>Assign</th>
                        <th>Results</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {data && data.map(x => {
                        return (
                            <tr key={x.uuid}>
                                <td>{x.username}</td>
                                <td>{x.displayname === null ? "null" : x.displayname}</td>
                                <td><MDBBtn size="sm" color="#ED5C5F" type='button' className='btn-asgn' onClick={() => assign(x.username,x.uuid)} > Assign </MDBBtn></td> 
                                <td><MDBBtn size="sm" color="#ED5C5F" type='button' className='btn-asgn'  onClick={() => view(x.username,x.uuid)} > View Results </MDBBtn></td> 
                            </tr>
                        )
                    })}
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

export default patientList
