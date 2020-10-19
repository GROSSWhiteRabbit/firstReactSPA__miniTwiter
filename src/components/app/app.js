import React, {Component} from 'react';
import nextId from 'react-id-generator'

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
    margin-bottom: 20px;
`


export default class App extends Component {

    state = {
        data: [
            {label: "I lerning React!!", important: true, like:false, id:nextId()},
            {label: "I сan't believe in this", important: false, like:false, id:nextId()},
            {label: "It's true?", important: false, like:false, id:nextId()},
        ],
        liked: 0,
        term: '',
        filter: 'all'
    } 

    onDelete(id) {
        const index = this.state.data.findIndex(elem=> elem.id === id)
        this.setState(({data})=>{
            const newData = data.slice()
            newData.splice(index,1,)
            return {
                data: newData,
                
            }
        })
    }

    onToggle(toggle, data, index) {
        const alteredItem = {...data[index], [toggle]: !data[index][toggle]}
        const newData = data.slice()
        newData.splice(index,1,alteredItem)
        return newData;
    }

    onToggleLike(id) {
        const index = this.state.data.findIndex(elem=> elem.id === id)
        
        this.setState(({data, liked})=>{
            const like = !data[index].like? liked+1:liked-1;
            return {
                data: this.onToggle('like', data, index ),
                liked: like
            }
        })
    }

    onToggleImportant(id) {
        const index = this.state.data.findIndex(elem=> elem.id === id)
        
        this.setState(({data})=>{
            return {
                 data: this.onToggle('important', data, index ),
            }
        })
    }

    addItem(text) {
        this.setState(({data})=>{
            const newItem = {
                label: text,
                important: false,
                like: false,
                id: nextId()
            }
            const newData = [...data, newItem]
            return {
                data: newData
            }
        })
    }

    serchPost(items,term) {
        if(term.length===0) {
            return items
        }

        return items.filter(item=> {
            return item.label.includes(term)
        })
    }

    filterPost(items, filter) {
        if(filter ==='like') {
            return items.filter(item=>item.like)
        } else {
            return items;
        }
    }

    onTerm(e) {
        this.setState(
            {
                term: e.target.value
            }
        )
        
    }
    onFilter(e){
        console.log(e.target.value)
        this.setState(
            {
                filter: e.target.value
            }
        )
    }


    render() {
        const {liked, data, term, filter} = this.state;
        const visiblePost = this.filterPost(this.serchPost(data,term),filter);
        return (
            <AppBlock>
                <Header liked={liked} dataLength={data.length}/>
                <div className="search-panel d-flex">
                    <SearchFilter onTerm={(e)=>this.onTerm(e)}/>
                    <PostFilter filter={filter} onFilter={(e)=>{this.onFilter(e)}}/>
                </div>

                <PostList posts={visiblePost} 
                    onDelete={(id)=>this.onDelete(id)}
                    onToggleLike={(id)=>this.onToggleLike(id)}
                    onToggleImportant={(id)=>{this.onToggleImportant(id)}}/>
                <FormAdd onAdd={(text)=>this.addItem(text)}/>
            </AppBlock>
    )
    }
   
};

