import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import '../../../styling/patient_home.css'


const ResultTable = ({results}) => {
    let totalQuestion = 0
    let totalCorrect = 0
    let percentageCorrect = 0
    return (
        <div>
            {/* scrollY */}            
            <MDBTable striped>
                <MDBTableHead className="table-head" color="#00acc1 cyan darken-1" textWhite>
                    <tr>
                        <th>Assignment ID</th>
                        <th>Difficulty Level</th>
                        <th>Score</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Duration(s)</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {results && results.map(x => {
                        totalCorrect = totalCorrect + x.qnscorrect
                        totalQuestion = totalQuestion + x.qnsanswered
                        let hour = parseInt(x.attemptdatetime.substring(11,13))
                        let new_hour = hour + 8 < 24 ? hour + 8 : hour + 8 - 24 
                        let date = x.attemptdatetime.substring(0,10)
                        let time = new_hour + x.attemptdatetime.substring(13,16)
                        let difficulty = "Easy"
                        if (x.difficulty == 1){
                            difficulty = "Medium"
                        } else if (x.difficulty == 2){
                            difficulty = "Hard"
                        }
                        percentageCorrect = totalCorrect*100/totalQuestion
                        return (
                            <tr key={x.resultid}>
                                <td>{x.resultid}</td>
                                <td>{difficulty}</td> {/*Should print difficulty lvl*/}
                                <td>{`${x.qnscorrect}/${x.qnsanswered}`}</td>
                                <td>{date}</td>
                                <td>{time}</td>
                                <td>{x.completiontime === null ? "null" : x.completiontime}</td>
                            </tr>
                        )
                    })}
                </MDBTableBody>
            </MDBTable>
            <hr/>
            <h4 class="results-text"> Total questions answered: {totalQuestion} </h4>
            <h4 class="results-text"> Total correct answers: {totalCorrect} </h4>
            <h4 class="results-text"> Accuracy: {percentageCorrect}% </h4>
            <hr/>
        </div>
    )
}

export default ResultTable
