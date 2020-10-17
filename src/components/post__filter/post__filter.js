import React from 'react';
import './post__filter.css'

const PostFilter = ()=>{
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">Все</button>
            <button type="button" className="btn btn-outline-dark">Понравилось</button>
        </div>
    )
};


export default PostFilter;