import React from 'react';
import { Component } from 'react';

import './post__item.css';


export default class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: this.props.important,
            like: false
        }
    }

    onLike() {
        this.setState(({like})=>({
            like: !like
        }))
    }

    onImportant() {
        this.setState(({important})=>({
            important: !important
        }))
    }

    render() {
        const {label} = this.props
        const {important, like} = this.state
        let className = "app-list-item d-flex justify-content-between"
        
        if(like) {
            className += ' like';
        }

        if(important) {
            className += ' important';
        }
        
        return (
            <div className={className}>
                <span className="app-list-item-label" onClick={()=>this.onLike()}>{label}</span>
                <div className="d-flex justify-content-center align-items-center ">
                    <button type="button" onClick={()=> this.onImportant()} className=" btn btn-star btn-sw">
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className=" btn btn-trash btn-sw">
                        <i className="fa fa-trash"></i>
                    </button>

                    <i className="fa fa-heart "></i>
                </div>
            </div>
        )
    }
}




// const PostItem = ({label, important})=>{

//     let className = "app-list-item d-flex justify-content-between"
    
//     if(important) {
//         className += ' important';
//     }
    
//     return (
//         <div className={className}>
//             <span className="app-list-item-label">{label}</span>
//             <div className="d-flex justify-content-center align-items-center ">
//                 <button type="button" className="  btn-star btn-sw">
//                     <i className="fa fa-star"></i>
//                 </button>
//                 <button type="button" className="  btn-trash btn-sw">
//                     <i className="fa fa-trash"></i>
//                 </button>

//                 <i className="fa fa-heart "></i>
//             </div>
//         </div>
//     )

// };


// export default PostItem;