import { QuestionList } from "../../components/Medical/QuestionList";

const server = "35.247.159.114:8000";

export const fetchDifficulty = (sessionID, userID) => dispatch => {
    let params = "?sessionid=" + sessionID + "&userid=" + userID
    fetch("http://"+ server + "/backend/question/assign/get" + params)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_DIFFICULTY',
            payload: data
        })
        );
}

export const fetchPatientResult = (sessionID, userID) => dispatch => {
    let params = "?sessionid=" + sessionID + "&userid=" + userID
    fetch("http://"+ server + "/backend/question/result/multi/get" + params)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_DIFFICULTY',
            payload: data
        })
        );
}

export const assignUserid = (userid) => dispatch => {
    dispatch({
        type: 'ASSIGN_USERID',
        userid: userid
    })
}
export const assignDifficulty = (difficulty) => dispatch => {
    dispatch({
        type: 'ASSIGN_DIFFICULTY',
        difficulty: difficulty
    })   
}
export const assignQuestionList = (questionList) => dispatch => {
    dispatch({
        type: 'ASSIGN_QUESTIONLIST',
        payload: questionList
    })   
}
export const assignPatient = (uuid, questionList, sessionID, difficulty) => dispatch => {
    let params = "?sessionid=" + sessionID
    let data = {
        sessionid: sessionID,
        userid: uuid,
        questions: questionList,
        difficulty: difficulty
    }
    fetch("http://"+ server + '/backend/question/assign/create' + params, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'CREATE_LEVELS',
                payload: data
            })
        })
}