const initState = {
    questions: [],
    results: []
};

const TwitterReducers = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_RESULTS':
            return {
                ...state,
                results: action.payload
            }
        case 'TEST':
            return {
                ...state,
                results: action.payload
            }
        default:
            return state;
    }
}
export default TwitterReducers;
