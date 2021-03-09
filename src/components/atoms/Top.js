import React from 'react';
import styled from 'styled-components';
import logo_image from '../../images/logo.PNG';

const Div = styled.div`
display: flex;
height: 55px;
justify-content: center;
background-color: white;
`


const Top = () => {
    return (
        <Div>
           <img src={logo_image} alt="logo"/>
        </Div>
    )
}

export default Top
