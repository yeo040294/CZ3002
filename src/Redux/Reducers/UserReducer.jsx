const initState = {
    data: [],
    result: []
};

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                ...state,
                data: action.payload
            }
        case 'FETCH_ALL':
            return {
                ...state,
                data: action.payload
            }
        case 'CREATE_ACC':
            return {
                ...state,
                data: action.payload
            }
        case 'CHANGE_DISPLAYNAME':
            return {
                ...state,
                data: action.payload
            }
        case 'CHANGE_PASSWORD':
            return {
                ...state,
                result: action.payload
            }
        case 'LOG_IN':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default UserReducer;
