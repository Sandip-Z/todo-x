import React from 'react'
import {connect} from 'react-redux'


const Display = ({myTodos, deleteTodo})=>{
    const mappedTodo = myTodos.map(thatTodo => {
        return (
            <div key={thatTodo.id} className="container box">
            <h2>{thatTodo.name}</h2>
            <p>{thatTodo.desc}</p>
            <button onClick={()=>{deleteTodo(thatTodo.id)}}>DeleteThis</button>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display)