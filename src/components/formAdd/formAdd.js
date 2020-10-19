import React, { Component } from 'react';

// import './formAdd.css';
import styled from 'styled-components'

const Input = styled.input`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`
// {onAdd}
export default class FormAdd extends Component{

    state = {
        text: ''
    }
    
    onValueChange = (e) =>{
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}    
                action="#" 
                className="bottom-panel d-flex">
                <Input value={this.state.text} onChange={this.onValueChange}   type="text" className="form-control" name="textForm" placeholder="О чем вы думаете?"/>
                <button  type='submit' className="btn btn-outline-secondary">Добавить</button>
            </form>
        );
    }


};


 