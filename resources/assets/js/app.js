import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware} from "redux"
import registerServiceWorker from './registerServiceWorker';

var value = {
    name :'hello nick'
}

const test1 =(state=value,action)=>{
    switch (action.type) {
        case "SET":
        state  = action.name
    }
    
   
    return state
}

const mylogger=(store)=>(next)=>(action)=>{
    // console.log("Log Action", action);
    next(action);
}



const store = createStore(combineReducers({test1:test1}),{},applyMiddleware(mylogger))


ReactDOM.render(
    <Provider store={store} >
        <Routes/>
    </Provider>,
document.getElementById('react-code'));

registerServiceWorker();
