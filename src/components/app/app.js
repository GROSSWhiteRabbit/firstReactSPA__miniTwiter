import React from 'react';

import Header from '../header/header';
import SearchFilter from '../searchFilter/searchFilter';
import PostFilter from '../post__filter/post__filter';
import PostList from '../post__list/post__list';
import FormAdd from '../formAdd/formAdd';

import './app.css';


const App = ()=>{

const data = [
    {label: "I lerning React!!", important: true, id:'wawdadw'},
    {label: "I сan't believe in this", important: false, id:'wadw'},
    {label: "It's true?", important: false, id:'wawdddw'},
]
    return (
        <div className="app">
            <Header/>
            <div className="search-panel d-flex">
                <SearchFilter/>
                <PostFilter/>
            </div>
            <PostList posts={data}/>
            <FormAdd/>
        </div>
)
};


export default App;