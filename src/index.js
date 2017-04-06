import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory } from 'react-router';
import route from './routes/route';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension? window.devToolsExtension():f=>f
    )


);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={route} />
    </Provider>,
    document.getElementById('root')


);

