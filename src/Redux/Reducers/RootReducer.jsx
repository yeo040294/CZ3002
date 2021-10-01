import { combineReducers } from 'redux';
import TwitterReducers from './TwitterReducers'
import QuestionReducer from './QuestionReducer'
import UseridReducers from './UseridReducer';

const RootReducer = combineReducers({
    userid: UseridReducers,
    twitter: TwitterReducers,
    quest:QuestionReducer,
});

export default RootReducer;
