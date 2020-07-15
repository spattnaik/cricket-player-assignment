import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from './reducers/root-reducer';

const initialState = {};
const middleWare = [thunk];

const composeEnhancers = composeWithDevTools({});
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleWare)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

