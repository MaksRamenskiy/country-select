import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

let createStoreWithMiddleware = applyMiddleware(
    logger
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;