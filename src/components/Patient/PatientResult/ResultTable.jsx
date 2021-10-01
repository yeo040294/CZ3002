import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';


const ResultTable = ({results}) => {


    return (
        <div>
            {/* scrollY */}
            <MDBTable striped >
                <MDBTableHead>
                    <tr>
                        <th>Assignment Name</th>
                        <th>Difficulty Level</th>
                        <th>Score</th>
                        <th>Date</th>
                        <th>Duration</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {results && results.map(x => {
                        return (
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.difficulty}</td>
                                <td>{x.score}</td>
                                <td>{x.date}</td>
                                <td>{x.duration}</td>
                            </tr>
                        )
                    })}
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

export default ResultTable
