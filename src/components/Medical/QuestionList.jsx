import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn } from 'mdbreact';

export const QuestionList = ({ data, submit }) => {
    let questionList = [];

    return (
        <div>
            <MDBTable >
                <MDBTableHead>
                    <tr>
                        <th>Select</th>
                        <th>Question number</th>                        
                        <th>Question image 1</th>
                        <th>Question image 2</th>                        
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {data && data.map(x => {
                        let img_src1 = "data:image/jpeg;base64," + x.qnimg1;
                        let img_src2 = "data:image/jpeg;base64," + x.qnimg2;  
                        return (                            
                            <tr key={x.quimg1}>
                                <td><input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="rowcheck{user.id}"
                                    onChange={(e) => questionList.push(x.questionid.toString())}
                                    /></td>                              
                                <td>{x.questionid}</td>
                                <td><img src={img_src1}/></td> 
                                <td><img src={img_src2}/></td> 

                            </tr>
                        )
                    })}
                    <MDBBtn size="sm" color="blue" onClick={() => submit(questionList)} > Assign </MDBBtn>
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

