import React from 'react';
// import './searchFilter.css';
import styled from 'styled-components'

const Input = styled.input`
    margin-right: 4px;
    width: auto;
    flex-grow: 1;
`



const SearchFilter = ({onTerm})=>{
    return <Input onChange={onTerm} type="text" name="search" className="form-control"  placeholder="Поиск по записям"/>
};


export default SearchFilter;