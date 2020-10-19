import React from 'react';
import { Component } from 'react';

// import './post__item.scss';
import styled, {css} from 'styled-components';


        
const ListItem = styled.div`
        display: flex;
        justify-content: space-between;
        font-size: 1.25rem;
        button {
            width: 35px;
            height: 35px;
            margin: 3px;
            font-size: 17px;
            border: none;
            cursor: pointer;
            &:focus {
                box-shadow: none;
                outline: none;
            }
        }
        .btn-star {
            color: ${({important})=> important? ` #aeaeae`:`#FFD700`};
        }
        .btn-trash {
            color: red;
        }
        .fa-heart {
            width: 35px;
            height: 35px;
            text-align: center;
            line-height: 35px;
            font-size: 16px;
            color: red;
            transition: all 0.3s ;
            transform:translateX(30px);
            opacity: 0;

            ${({like})=> like&& css`
            transform:translateX(0px);
            opacity: 1;
            `}
            
            
        }
        `;
const Label = styled.span`
        display: block;
        line-height: 35px;
        cursor: pointer;
        user-select: none;
        transition: 0.5s all;

        ${({important})=> important && css`
            color: #FFD700;
            `}
`;


export default class PostItem extends Component {


    render() {
        const {label, onDelete,onToggleLike,onToggleImportant, important, like} = this.props

        return (
            <ListItem like={like} important = {important}>
                <Label important = {important} onClick={onToggleLike}>{label}</Label>
                <div className="d-flex justify-content-center align-items-center ">
                    <button type="button" onClick={onToggleImportant} className=" btn btn-star btn-sw">
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" onClick={onDelete} className=" btn btn-trash btn-sw">
                        <i className="fa fa-trash"></i>
                    </button>

                    <i className="fa fa-heart "></i>
                </div>
            </ListItem>
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