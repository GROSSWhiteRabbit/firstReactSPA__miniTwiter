import React from 'react';
import styled from 'styled-components';
// import './header.css'

const Head = styled.div`
    margin: 0 0 1.2rem 0;
    justify-content: space-between;
    align-items: center;
    display:flex;
    h1{
        font-size: 30px;
    }
    h2 {
        font-size: 1.2rem;
        vertical-align: middle;
        color:${(props)=> props.red ? 'red' : 'grey'} 
    }
`
const H1Head = styled(Head)`
    h1 {
        color: green;
    }
`
const Header = ()=>{
    return (
        <Head > 
            <h1>Kononenko Vladimir</h1>
            <h2> Записей 5, из них понравилось 1</h2>
        </Head>
    )
};


export default Header;