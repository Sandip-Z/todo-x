import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const myState = {
    todo : [
        {id:1, name:'buy eggs', desc:'buy eggs from xxx store'}
    ]
}

function reducer(state = myState, action){
    // console.log(action);
    if(action.type === 'ADD_TODO'){
        var newTodo = [...state.todo, action.data]
        return{
            ...state,
            todo : newTodo
        }
    }

    if(action.type === 'DELETE_TODO'){
        let {id} = action;
        const myNewList = state.todo.filter(thatList => {
            return thatList.id !== id 
        })
        return{
            ...state,
            todo: myNewList
        }
    }
    
    return state
}

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
