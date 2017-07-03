import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';

let createStoreWithMiddleware = applyMiddleware(
    logger
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;