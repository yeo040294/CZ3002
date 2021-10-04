const initState = {
    display: [],
    difficulty: 0
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
        case 'ASSIGN_DIFFICULTY':
            return {
                ...state,
                difficulty: action.payload
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
