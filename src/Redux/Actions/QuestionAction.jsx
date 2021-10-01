const server = "34.87.71.156:8000";

export const fetchResults = (userid,sessionid) => dispatch => {
    fetch("http://"+ server + `/backend/question/result/multi/get?sessionid=${sessionid}&userid=${userid}`)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_RESULTS',
            payload: data
        })
        );
}

// export const fetchResults = (postData) => dispatch => {
//     fetch("http://"+ server + '/backend/question/result/multi/get', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(postData)
//     })
//         .then(res => res.json())
//         .then(data => dispatch({
//             type: 'FETCH_RESULTS',
//             payload: data
//         })
//         );
// }

