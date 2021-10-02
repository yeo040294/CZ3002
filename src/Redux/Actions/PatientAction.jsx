const server = "34.87.71.156:8000";

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

export const assignPatient = (postData) => dispatch => {
    fetch("http://"+ server + '/backend/question/assign/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'CREATE_LEVELS',
                payload: data
            })
        })
}