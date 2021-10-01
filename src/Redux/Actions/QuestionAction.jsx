const server = "34.87.71.156:8000";

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

