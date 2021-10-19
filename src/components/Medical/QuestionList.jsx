import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBRow, MDBCol } from 'mdbreact';
import '../../styling/medical_home.css';

export const QuestionList = ({ data, submit }) => {
    let questionList = [];

    return (
        <div>
            <MDBTable striped>
                <MDBTableHead className="table-head" color="#00acc1 cyan darken-1" textWhite>
                    <tr>
                        <th>Select</th>
                        <th>Question No.</th>                        
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
                                <td><img className="qn-img" src={img_src1}/></td> 
                                <td><img className="qn-img" src={img_src2}/></td> 

                            </tr>
                        )
                    })}

                
                </MDBTableBody>
            </MDBTable>
            <MDBRow className='d-flex mb-4 btnTask'>
                <div className='text-center col-md-12 medical-manual-assgn'>
                    <MDBBtn color="#ED5C5F" type='button' id="task-cnfrm" className='btn-asgn float-end' onClick={() => submit(questionList)} > Assign </MDBBtn>
                </div>
            </MDBRow>
        </div>
    )
}

