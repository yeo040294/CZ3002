import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn } from 'mdbreact';

export const QuestionList = ({ data, confirm }) => {
    let questionList = [];

    return (
        <div>
            <MDBTable >
                <MDBTableHead>
                    <tr>
                        <th>Question number</th>                        
                        <th>Question image 1</th>
                        <th>Question image 2</th>
                        <th>Select</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {data && data.map(x => {
                        let img_src1 = "data:image/jpeg;base64," + x.qnimg1;
                        let img_src2 = "data:image/jpeg;base64," + x.qnimg2;  
                        return (                            
                            <tr key={x.quimg1}>
                                <td>{x.questionid}</td>
                                <td><img src={img_src1}/></td> 
                                <td><img src={img_src2}/></td> 
                                <td><input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="rowcheck{user.id}"
                                    onChange={(e) => questionList.push(x.questionid)}
                                    /></td>
                            </tr>
                        )
                    })}

                    <button type="submit"> Submit </button>
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

