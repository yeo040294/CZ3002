const initState = {
    questions: [],
    results: []
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
        default:
            return state;
    }
}
export default QuestionReducer;
