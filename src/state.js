import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import promisesMiddleware from './middlewares/promises';

let createStoreWithMiddleware = applyMiddleware(
    promisesMiddleware,
    logger
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;