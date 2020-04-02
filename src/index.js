import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { creatStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore();

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker();
