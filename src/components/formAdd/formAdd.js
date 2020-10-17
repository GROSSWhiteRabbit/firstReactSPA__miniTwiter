import React from 'react';

import './formAdd.css';

const FormAdd = ()=>{

    return (
        <form action="#" className="bottom-panel d-flex">
            <input type="text" className="form-control new-post-label" name="textForm" placeholder="О чем вы думаете?"/>
            <button type='submit' className="btn btn-outline-secondary">Добавить</button>
        </form>
    );

};


export default FormAdd;