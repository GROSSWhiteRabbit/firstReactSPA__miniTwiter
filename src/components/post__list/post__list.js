import React from 'react';

import PostItem from '../post__item/post__item';

import './post__list.css';


const PostList = ({posts})=>{

    const    elements = posts.map(({id, ...item})=> {
       return (
       <li key={id} className="list-group-item">
            <PostItem  {...item}/>
       </li>
      
       )
    })

    return (
        <ul className= "post-list list-group">
            {elements}
        </ul>
    )
};


export default PostList;