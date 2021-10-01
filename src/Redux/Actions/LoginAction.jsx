export const logIn = (userid) => dispatch => {
    dispatch({
        type: 'LOG_IN',
        payload: userid
    })
}