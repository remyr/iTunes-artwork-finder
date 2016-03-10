import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Application from './containers/application';

let initialState = {
    results: [],
    isLoading: false,
    display: false,
};
let store = configureStore(initialState);

ReactDom.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('app')
);

