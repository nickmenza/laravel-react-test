import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware} from "redux"
import registerServiceWorker from './registerServiceWorker';
import cookie from 'react-cookies';
var value = {
    name :'hello nick'
}

const test1 =(state=value,action)=>{
    switch (action.type) {
        case "SET":
        state  = {name:action.name}
        break;
        case "GET":
        
        break;
    }
    
    return state
}

const user = (state=cookie.load('user'),action)=>{
    
    switch (action.type) {
        case "SET_USER":
        state  = action.user
        cookie.save('user', action.user , { path: '/' })
        break;
        
    }
    return state
}

const mylogger=(store)=>(next)=>(action)=>{
    // console.log("Log Action", action);
    next(action);
}



const store = createStore(combineReducers({test1:test1,user:user}),{},applyMiddleware(mylogger))


ReactDOM.render(
    <Provider store={store} >
        <Routes/>
    </Provider>,
document.getElementById('react-code'));

registerServiceWorker();
