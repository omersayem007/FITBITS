import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Router} from 'react-router';
import Routes from './routes/index';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();


ReactDOM.render(<Router history={history} ><Routes/></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
