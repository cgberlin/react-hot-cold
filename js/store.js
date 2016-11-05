import React from 'react'
import redux, { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer);


export default store;
