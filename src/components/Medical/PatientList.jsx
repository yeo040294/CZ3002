import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn } from 'mdbreact';

const patientList = ({ data, assign, view }) => {

    return (
        <div>
            <MDBTable striped scrollY >
                <MDBTableHead>
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
                            <tr key={x.username}>
                                <td>{x.username}</td>
                                <td>{x.name}</td>
                                <td><MDBBtn size="sm" color="blue" onClick={() => assign(x.username)} > Assign </MDBBtn></td> 
                                <td><MDBBtn size="sm" color="blue" onClick={() => view(x.username)} > View Results </MDBBtn></td> 
                            </tr>
                        )
                    })}
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

export default patientList
