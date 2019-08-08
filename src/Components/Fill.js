import React, { Component } from 'react'
import {connect} from 'react-redux'


class Fill extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            desc : ''
        }
    }
    handleChange = (e)=>{
        const {id,value} = e.target;
        this.setState({
            [id] : value
        })
    }

    handleClick = ()=>{
        let tempState = this.state;
        tempState.id = Math.random() * 100;
        if(tempState.name !== ''){
            this.props.addTodo(tempState);
        this.setState({
            name:'',
            desc:''
        })
        }
        
    }
    render(){
        return(
            <div>
            <p>Add new to do </p>
            <input type="text" id="name" onChange={this.handleChange} value={this.state.name} placeholder="List name"/>
            <input type="text" id="desc" onChange={this.handleChange} value={this.state.desc} placeholder="List Desc"/>
            <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return { 
        addTodo : (obj)=>{
            dispatch({type:'ADD_TODO', data:obj})
        }
    }
}


export default connect(null,mapDispatchToProps)(Fill)