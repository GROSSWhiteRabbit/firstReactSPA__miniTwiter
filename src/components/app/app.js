import React from 'react';

import Header from '../header/header';
import SearchFilter from '../searchFilter/searchFilter';
import PostFilter from '../post__filter/post__filter';
import PostList from '../post__list/post__list';

import FormAdd from '../formAdd/formAdd';


const App = ()=>{
return (
    <div className="app">
        <Header/>
        <div className="search-panel d-flex">
            <SearchFilter/>
            <PostFilter/>
        </div>
        <PostList/>
        <FormAdd/>
    </div>
)
};


export default App;