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
            <h2>Members</h2>
            <input type="text" id="name" onChange={this.handleChange} value={this.state.name} placeholder="Client First Name" className="job-input-field"/>
            <input type="text" id="desc" onChange={this.handleChange} value={this.state.desc} placeholder="Client Last Name" className="job-input-field"/>
            <button onClick={this.handleClick} className="job-POST-field">Submit</button>
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