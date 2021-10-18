const initState = {
    questions: [],
    results: [],
    questionDetail: [],
    question: []
};

const QuestionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_RESULTS':
            return {
                ...state,
                results: action.payload
            }
        case 'FETCH_QUESTIONS':
            return {
                ...state,
                questions: action.payload
            }
        case 'CREATE_QUESTIONS':
            return {
                ...state,
                question: action.payload
                }
        case 'UPDATE_QUESTIONS':
            return {
                ...state,
                question: action.payload
                }   
        case 'FETCH_QUESTION':
            return {
                ...state,
                questionDetail: action.payload
            }
        default:
            return state;
    }
}
export default QuestionReducer;
