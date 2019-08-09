import React, { PureComponent } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'


class RandomGetApi extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            data : undefined,
            APIid:1
        }
    }
    handleClick = ()=>{
        var newAPIid = parseInt(this.state.APIid) + 1;
        axios.get('https://reqres.in/api/users/' + this.state.APIid )
        .then(res=>{
            var id = res.data.data.id;
            var name = res.data.data.first_name;
            var desc = res.data.data.last_name;
            var obj = {id:id, name:name, desc:desc}
            this.setState({
                data : obj,
                APIid : newAPIid
            });
            this.props.getRequest(this.state.data);
        })
        .catch(err=>console.log(err));
    }

    render(){
        return(
            <div>
            <button onClick={this.handleClick}>Get Request for 1 todo list</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getRequest : (data)=>{
            dispatch({type:'PULL_FROM_API', data:data})
        }
    }
}


export default connect(null,mapDispatchToProps)(RandomGetApi)
