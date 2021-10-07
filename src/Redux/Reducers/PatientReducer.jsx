const initState = {
    display: [],
    uuid: '',
    difficulty: 0,
    questions: null,
    questionList: [],
    assignment: []
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
        case 'ASSIGN_USERID':
            return {
                ...state,
                uuid: action.userid
            }
        case 'ASSIGN_DIFFICULTY':
            return {
                ...state,
                difficulty: action.difficulty
            }
        case 'ASSIGN_QUESTIONLIST':
            return {
                ...state,
                questions: action.payload
            }
        case 'ASSIGN_DIFFICULTY':
            return {
                ...state,
                difficulty: action.difficulty
            }       
        case 'CREATE_LEVELS':
            return {
                ...state,
                questions: action.payload
            }
        case 'START_GAME':
            return {
                ...state,
                assignment: action.payload
            }
        case 'ADD_QUESTIONLIST':
            return {
                ...state,
                questionList: action.payload
            }
        default:
            return state;
    }
}
export default PatientReducers;
