const initState = {
    userid: '',
};

const UseridReducers = (state = initState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                userid: action.payload
            }
        default:
            return state;
    }
}
export default UseridReducers;
