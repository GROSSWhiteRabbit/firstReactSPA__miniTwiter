import React from 'react';
// import { ListGroup, ListGroupItem } from 'reactstrap';

import PostItem from '../post__item/post__item';

// import './post__list.css';
import styled from 'styled-components'

const PostListGroup = styled.ul`
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 100%;
`
const PostListGroupItem = styled.li`
        padding: 20px 35px 20px 35px;
        margin-top: 10px;
`
const PostList = ({posts, onDelete,onToggleLike,onToggleImportant})=>{

    const    elements = posts.map((obj)=> {
        if(typeof(obj)=='object' && obj!= null) {
            const {id, ...items} = obj;

            return (
                <PostListGroupItem key={id} className="list-group-item">
                     <PostItem 
                      {...items}
                      onDelete={()=>onDelete(id)}
                      onToggleImportant={()=>onToggleImportant(id)}
                      onToggleLike={()=>onToggleLike(id)}/>
                </PostListGroupItem>
               
                )
        }
        return null;
       
    })

    return (
        <PostListGroup className= " list-group">
            {elements}
        </PostListGroup>
    )
};


export default PostList;