import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';


const ResultTable = ({results}) => {

    return (
        <div>
            {/* scrollY */}
            <MDBTable striped >
                <MDBTableHead>
                    <tr>
                        <th>Assignment ID</th>
                        <th>Difficulty Level</th>
                        <th>Score</th>
                        <th>Date</th>
                        <th>Duration</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {results && results.map(x => {
                        return (
                            <tr key={x.resultid}>
                                <td>{x.resultid}</td>
                                <td>{"null"}</td>
                                <td>{`${x.qnscorrect}/${x.qnsanswered}`}</td>
                                <td>{x.attemptdatetime}</td>
                                <td>{x.completiontime === null ? "null" : x.completiontime}</td>
                            </tr>
                        )
                    })}
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

export default ResultTable
