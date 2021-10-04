const server = "35.247.159.114:8000";

export const fetchResults = (userid,sessionid) => dispatch => {
    fetch("http://"+ server + `/backend/question/result/multi/get?sessionid=${sessionid}&userid=${userid}`)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_RESULTS',
            payload: data
        })
        );
}

export const fetchAllQuestion = (difficulty, userid, sessionid) => dispatch => {
    fetch("http://35.247.159.114:8000/backend/question/multi/get?sessionid=jdjbu19vy3w3vzxswlm8wpm7r1rznlos&userid=5c4cd713-274f-423d-8151-4faec2f14368&difficulty=0")
    // fetch("http://"+ server + `/backend/question/result/multi/get?sessionid=${sessionid}&userid=${userid}&difficulty=${difficulty}`)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_QUESTIONS',
            payload: data
        }))
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

