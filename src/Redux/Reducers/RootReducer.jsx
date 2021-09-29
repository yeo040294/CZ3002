import { combineReducers } from 'redux';
import TwitterReducers from './TwitterReducers'
import QuestionReducer from './QuestionReducer'

const RootReducer = combineReducers({
    twitter: TwitterReducers,
    quest:QuestionReducer,
});

export default RootReducer;
