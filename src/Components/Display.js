import React from 'react'
import {connect} from 'react-redux'


const Display = ({myTodos, deleteTodo, handlePush, handlePull})=>{
    const mappedTodo = myTodos.map(thatTodo => {
        return (
            <div key={thatTodo.id} className="container box">
            <h2>{thatTodo.name}</h2>
            <p>{thatTodo.desc}</p>
            <button onClick={()=>{deleteTodo(thatTodo.id)}}>DeleteThis</button>
            <button onClick={()=>{handlePush({name:thatTodo.name, job:thatTodo.desc})}}>Push</button>
            </div>
        )
    })
    return(
        <div>
        {mappedTodo}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        myTodos : state.todo
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        deleteTodo : (id)=>{
            dispatch({type:'DELETE_TODO', id:id})
        },
        handlePush : (obj) =>{
            dispatch({type:'PUSH_TO_POST_API', data:obj})
        },
        handlePull : () =>{
            dispatch({type:'PULL_TO_STORE', number:5})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display)