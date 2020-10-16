import React from 'react';

const PostItem = ()=>{

    return (
        <li className="post-item d-flex justify-content-between">
            <span>Hello world!!</span>
            <div className="d-flex justify-content-center align-items-center ">
                <button type="button" className=" btn btn-star btn-sw">
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" className=" btn btn-trash btn-sw">
                    <i className="fa fa-trash"></i>
                </button>

                <i className="fa fa-heart"></i>
            </div>
        </li>
    )

};


export default PostItem;