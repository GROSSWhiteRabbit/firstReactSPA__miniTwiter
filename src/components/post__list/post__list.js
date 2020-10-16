import React from 'react';

import PostItem from '../post__item/post__item';


const PostList = ()=>{
    return (
        <ul className= "post-list list-group">
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </ul>
    )
};


export default PostList;