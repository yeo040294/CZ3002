const server = "35.247.159.114:8000";

export const fetchAllUser = (role,sessionid) => dispatch => {
    fetch("http://"+ server + `/backend/user/multi/get?sessionid=${sessionid}&role=${role}`)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_ALL',
            payload: data
        })
        );
}

export const createAcc = (postData) => dispatch => {
    fetch("http://"+ server + '/backend/user/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'CREATE_ACC',
                payload: data
            })
        })
}