import React from 'react';

// import './formAdd.css';
import styled from 'styled-components'

const Input = styled.input`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`

const FormAdd = ()=>{

    return (
        <form action="#" className="bottom-panel d-flex">
            <Input type="text" className="form-control" name="textForm" placeholder="О чем вы думаете?"/>
            <button type='submit' className="btn btn-outline-secondary">Добавить</button>
        </form>
    );

};


export default FormAdd;