import {combineReducers} from 'redux';
import browser from './browser';
import userCountry from './userCountry';

const rootReducer = combineReducers({
    userCountry,
    browser,
})

export default rootReducer;