import React from 'react'
import {connect} from 'react-redux'

class Display extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            job : '',
            name : this.props.myTodos.name + ' ' + this.props.myTodos.desc,
            className : 'container box'
        }
    }

    handleChange = (e)=>{
        this.setState({
            job : e.target.value
        })
    }

    handlePOSTClick = (name) =>{
        this.props.handlePush({name:name, job:this.state.job});
        this.setState({
            job : ''
        })
    }

    render(){
    const mappedTodo = this.props.myTodos.map(thatTodo => {
        return (
            <div key={thatTodo.id} className={this.state.className}>
            <div className="col pull-right">
            <button onClick={()=>{this.props.deleteTodo(thatTodo.id)}}>X</button>
            </div>
            <div className="col">
            <p>First Name: {thatTodo.name}<br />Last Name : {thatTodo.desc}</p>
            </div>
            <div className="col">
            <input type="text" id="name" placeholder="Client job" className="job-input-field" onChange={this.handleChange}/>
            <button onClick={()=>{this.handlePOSTClick(thatTodo.name + ' ' + thatTodo.desc)}} className="job-POST-field">Push to post</button>
            </div>
            <div className="col">
            </div>
            </div>
        )
    })
    return(
        <div>
        {mappedTodo}
        </div>
    )
}
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display)