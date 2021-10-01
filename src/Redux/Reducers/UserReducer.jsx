const initState = {
    data: [],
    status:[]
};

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return {
                ...state,
                data: action.payload
            }
        case 'CREATE_ACC':
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}
export default UserReducer;
