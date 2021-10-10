import React, {useState, useEffect, useRef} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'; 
import Navbar from './Navbar'
import '../../styling/patient_game.css';


const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep}) => {
    const [selected, setSelected] = useState('')
    const [error, setError] = useState('');
    const radiosWrapper = useRef();

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked')
        if (findCheckedInput){
            findCheckedInput.checked = false;
        }
    }, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value)
        if (error) {
            setError('')
        }
    }
    const nextClickHandler = () => {        
        if(selected == '') {
            return setError('Please select one option!')
        }
        onAnswerUpdate(prevState => [...prevState, selected])
        setSelected('')
        if(activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion+1);
        }
        else{
            onSetStep(3)
        }

    }
    const img_src1 = "data:image/jpeg;base64," + data.qnimg1
    const img_src2 = "data:image/jpeg;base64," + data.qnimg2

    return(
        <div id="game-body">
            {/* <MDBRow>
                <MDBCol className="col-step" id="step-selected">

                </MDBCol>
                <MDBCol className="col-step">
                    
                </MDBCol>
                <MDBCol className="col-step">
                    
                </MDBCol>
            </MDBRow> */}
            <MDBRow id="first-content">
                <h2> Question number {activeQuestion+1}</h2>
            </MDBRow>
            <MDBRow id="second-content">
                <p>Are the two shapes identical? </p>
            </MDBRow>
            <MDBRow id="third-content">
                <MDBCol md="5" className="left-img">
                    <div className="card">
                        <img className="game-img" src={img_src1}/>
                    </div>
                </MDBCol>
                <MDBCol md="5" className="right-img">
                <div className="card">
                        <img className="game-img" src={img_src2}/>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow id="error-content">
                {error && <div className="has-text-danger"> {error} </div>}
            </MDBRow>
            <MDBRow id="forth-content">
                <div className="control" ref={radiosWrapper}>
                    <div className="radio-content" tabindex="-1">
                        <label type="radio" name="answer" className="radio-tab">
                        <input type="radio" name="answer" value="1" onChange={changeHandler} />
                        &nbsp; Yes
                        </label>
                    </div>
                    <div className="radio-content" tabindex="-1">
                        <label type="radio" name="answer" className="radio-tab">
                        <input type="radio" name="answer" value="0" onChange={changeHandler} />
                        &nbsp; No
                        </label>
                    </div>
                </div>
            </MDBRow>
            <MDBRow id="fifth-content">
                {/* <button className="button is-link is-medium mt-4" onClick={nextClickHandler}> Next </button> */}
                <div className="text-center mt-4">
                    <MDBBtn color="#1FB4CA" className="mb-3 btnSubmit" onClick={nextClickHandler} >Next</MDBBtn>
                </div>
            </MDBRow>
        </div>
    )
}

export default Question