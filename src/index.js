import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import configureStore from "./app/store"
import Main from './app/Main'

import './skin/style/layout.scss'


const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Main/>
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
