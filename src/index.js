import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import store from './state';

store.dispatch({
    type: 'CHECK_BROWSER_DEVICE'
});

store.dispatch({
    type: 'GET_COUNTRIES'
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);