import axios from 'axios'

const myState = {
    todo : [],
}

const reducer = (state = myState, action)=>{
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

    if(action.type === 'PUSH_TO_POST_API'){
        axios.post('https://reqres.in/api/users', action.data)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    if(action.type === 'PULL_FROM_API'){
          var newState = [...state.todo, action.data];
          return{
              ...state,
              todo:newState
          }
    }
        
    return state
}

export default reducer