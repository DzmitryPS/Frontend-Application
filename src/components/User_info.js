import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SimpleMap from './atoms/Map';

const Main = styled.div`
  background-color: #F0FFFF;
  height: 97%;
  margin: 10px;
  width: 35%;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  max-width:400px;
  min-width: 230px;
  h2{
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
  .icon{
    height: 30px;
    width: 30px;
    background-color: ${({color})=>(color && color.mainColor)}; 
    border-radius: 10px 0 10px 0;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    position: absolute;
}
  i{
    margin-top: 5px;
    color: white;
}
`
const Img = styled.img`
height:180px;
margin-top: 10px;
border-radius:100%;
`

const User_Info = () => {

  const state = useSelector(state=>state.data);
  const config = useSelector(state => state.config);
    return (
        <Main color={config}>
             <div className="icon">
             <i class="fas fa-user-tie"></i>
            </div>
            <Img src={state.user.profilePicture}/>
            <h3>{state.user.firstName} {state.user.lastName}</h3>
            <h2>{state.company.name}</h2>
            <SimpleMap/>
        </Main>
    )
}

export default User_Info
