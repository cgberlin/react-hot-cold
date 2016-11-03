import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import GuessContainer from './components/guess-container'
var ReactDOM = require('react-dom');
import store from './store'

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<GuessContainer />, document.getElementById('app'));
});
