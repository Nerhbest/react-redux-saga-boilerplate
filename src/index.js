import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import history from "./config/history";
import store from "./store/index";
import "./styles/main.css";


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App></App>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
