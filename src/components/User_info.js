import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SimpleMap from './Map';

const Main = styled.div`
  background-color: white;
  height: 97%;
  margin: 10px;
  width: 35%;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  max-width:400px;
  min-width: 230px;
  p{
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
  .icon{
    height: 30px;
    width: 30px;
    background-color: #64B0FB;
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
max-width:580px;
border-radius:100%;
`

const User_Info = () => {

  const state = useSelector(state=>state.data);

    return (
        <Main>
             <div className="icon">
             <i class="fas fa-user-tie"></i>
            </div>
            <Img src={state.user.profilePicture}/>
            <h3>{state.user.firstName} {state.user.lastName}</h3>
            <p>{state.company.name}</p>
            <SimpleMap/>
        </Main>
    )
}

export default User_Info
