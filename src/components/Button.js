import React, { Component } from 'react'
import styled from 'styled-components';

const Btn = styled.button`
 appearance: none;
  border: 0;
  border-radius: 5px;
  background: #0B207A; 
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  transition: 0.3s ease-in;
  :hover{
      background-color:#4C66D4;
  }
`


export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {text, onClick} = this.props;
        return (
            <div>
                <Btn onClick={onClick} >{text}</Btn>
            </div>
        )
    }
}
