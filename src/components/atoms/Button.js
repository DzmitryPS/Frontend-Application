import React, { Component } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Btn = styled.button`
 appearance: none;
  border: 0;
  border-radius: 5px;
  background: ${({color})=>(color && color.mainColor)};  
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  transition: 0.1s ease-in;
  :hover{
      background-color:#4C66D4;
  }
`


 const Button =({text, onClick})=>{
   
        
        const config = useSelector(state => state.config);

        return (
            <div>
                <Btn onClick={onClick} color={config} >{text}</Btn>
            </div>
        )
    
}

export default Button