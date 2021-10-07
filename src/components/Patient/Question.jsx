import React, {useState, useEffect, useRef} from 'react'


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
        <div className="card">
            <p  className="h2 font-weight-bold">Welcome to the game!</p>

            <h2> Question number {activeQuestion+1}</h2>
            <img src={img_src1}/>
            <img src={img_src2}/>
            <p>Are the two shapes identical? </p>

            <div className="control" ref={radiosWrapper}>
                <label type="radio" name="answer">
                <input type="radio" name="answer" value="1" onChange={changeHandler} />
                Yes
                </label>
                <label type="radio" name="answer">
                <input type="radio" name="answer" value="0" onChange={changeHandler} />
                No
                </label>
            </div>
          {error && <div className="has-text-danger"> {error} </div>}
          <button className="button is-link is-medium mt-4" onClick={nextClickHandler}> Next </button>

        </div>
    )
}

export default Question