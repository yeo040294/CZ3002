import Question from '../../components/Patient/Question'
import End from '../../components/Patient/End'
import React, {useState, useEffect } from 'react'

const App = ({questionData, questionList, sessionid, assignmentid, anstoken}) => {
    const [step, setStep] = useState(2)
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    const [result, setResult] = useState('')
    // console.log(result)

    if (step == 3) {
        let data = {
            "sessionid": sessionid,
            "assignmentid": assignmentid,
            "anstoken": anstoken,
            "answers": answers
          }
          var requestOptions = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data),
            redirect: 'follow'
          };
          
          fetch("http://35.247.159.114:8000/backend/question/assign/complete", requestOptions)
          .then(res => res.json())
          .then(data => {
              if (data.status === "Success"){
                  console.log(data.score)
                  setResult(data.score)
              }
              console.log(data) 
            }
          )
    }

    return (
        
        <div className="App">
            {step === 2 &&<Question 
                data={questionData[activeQuestion]}
                onAnswerUpdate={setAnswers} 
                numberOfQuestions={questionList.length}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={setActiveQuestion}
                onSetStep={setStep}
                /> }
            {step === 3 && <End 
                result={result}
                total={questionList.length}
                />}
        </div>
    )
}

export default App;