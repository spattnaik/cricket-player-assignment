import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import rootReducer from './reducers/root-reducer';

const initialState = {};
const middleWare = [thunk];

const composeEnhancers = composeWithDevTools({});
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleWare)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

