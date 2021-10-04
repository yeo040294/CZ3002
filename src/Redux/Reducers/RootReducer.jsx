import { combineReducers } from 'redux';
import TwitterReducers from './TwitterReducers'
import QuestionReducer from './QuestionReducer'
import UserReducer from './UserReducer'
import PatientReducer from './PatientReducer'

const RootReducer = combineReducers({
    twitter: TwitterReducers,
    quest:QuestionReducer,
    user:UserReducer,
    patient: PatientReducer
});

export default RootReducer;
