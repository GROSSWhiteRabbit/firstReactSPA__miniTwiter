import React, { Component } from 'react';

// import './post__filter.css'

//onFilter
export default class PostFilter extends Component {
    buttons = [
        {value: 'all', label:'Все'},
        {value: 'like', label:'Понравившиеся'}

    ]
    render(){
        const buttons = this.buttons.map(({value,label})=>{
            const {filter, onFilter} = this.props
            const active = filter;
            const clazz = active=== value ? ' btn-info' : ' btn-outline-secondary';
        return <button onClick={onFilter} value={value} type="button" className={"btn" + clazz}>{label}</button>
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }

};


