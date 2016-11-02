import React from 'react'
var ReactDOM = require('react-dom');
var redux = require('redux');
var hotColdReducer = require('./reducers/index').default;

var createStore = redux.createStore;

var store = createStore(hotColdReducer);


export default store;
