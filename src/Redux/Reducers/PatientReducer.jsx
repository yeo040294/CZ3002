const initState = {
    display: [],
};

const PatientReducers = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_DIFFICULTY':
            return {
                ...state,
                display: action.payload
            }
        case 'FETCH_RESULT':
            return {
                ...state,
                display: action.payload
            }
        case 'CREATE_LEVELS':
            return {
                ...state,
                display: action.payload
            }
        default:
            return state;
    }
}
export default PatientReducers;
