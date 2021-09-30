const server = "34.87.71.156:8000";

export const test = (postData) => dispatch => {
    fetch("https://"+ server + '/backend/user/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'set-cookie': 'sessionid=79t2ow3lak6ewjynca4dkdlz5bnlw1rv'
        },
        credentials:'include',
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'TEST',
            payload: data
        })
        );
}

export const fetchResults = (postData) => dispatch => {
    fetch("https://"+ server + '/backend/question/result/multi/get', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_RESULTS',
            payload: data
        })
        );
}

