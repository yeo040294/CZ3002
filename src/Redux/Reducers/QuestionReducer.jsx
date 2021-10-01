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
        default:
            return state;
    }
}
export default QuestionReducer;
