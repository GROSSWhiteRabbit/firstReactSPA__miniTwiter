import React from 'react';

import Header from '../header/header';
import SearchFilter from '../searchFilter/searchFilter';
import PostFilter from '../post__filter/post__filter';
import PostList from '../post__list/post__list';
import FormAdd from '../formAdd/formAdd';

// import './app.css';
// import style from './app.module.scss'
import styled from 'styled-components'

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 900px;
`


const App = ()=>{

const data = [
    
    {label: "I lerning React!!", important: true, id:'wawdadw'},
    {label: "I сan't believe in this", important: false, id:'wadw'},
    {label: "It's true?", important: false, id:'wawdddw'},
]
    return (
        <AppBlock>
            <Header/>
            <div className="search-panel d-flex">
                <SearchFilter/>
                <PostFilter/>
            </div>
            <PostList posts={data}/>
            <FormAdd/>
        </AppBlock>
)
};


export default App;