const server = "35.247.159.114:8000";
import Cookies from 'js-cookie'

export const logIn = (username, password) => dispatch => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    let data = {
        "username": username,
        "password": password
      }
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };
    fetch("http://35.247.159.114:8000/backend/user/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          Cookies.set('userid',result.userid, {path: '/'})
          Cookies.set('sessionid',result.sessionid, {path: '/'})
          Cookies.set('role',result.role, {path: '/'})            
    })
}

export const fetchUserInfo = (sessionid, userid) => dispatch => {
    fetch("http://"+ server + `/backend/user/get?sessionid=${sessionid}&userid=${userid}`)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_USER',
            payload: data
        }))
}
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