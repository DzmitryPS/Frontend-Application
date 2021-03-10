import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import {addCategorie, addBusinessModel} from './reducer/fetcher';

const Main = styled.div`
background-color: white;
  height: 97%;
  margin: 10px;
  width: 65%;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  max-width:700px;
  
  @media (max-width: 695px) {
    min-width:350px;
}
a{
    text-decoration: none;
    color: white;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  h3{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.descr{
  text-align: left;
  padding: 15px;
  margin-top: 10px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  max-height: 355px;

  @media (max-width: 695px) {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
}
  
}
.bottom_div{
   display: flex;
   justify-content: space-around;
p{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
ul{
  list-style: none;
  padding-left: 0px;
}
li{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #808080;
  margin: 5px;
  padding: 3px;
  font-size: 12px;
  border: 1px solid  #BEBEBE;
  border-radius: 30px;
    background-clip: padding-box;
}
  }
.btn{
  appearance: none;
  border: 0;
  background: ${({color})=>(color && color.mainColor)};  
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  transition: 0.1s ease-in;
  :hover{
      background-color:#4C66D4;
  }
}
.btns{
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
.main_info{
  height:40px ;
  background-color: ${({color})=>(color && color.mainColor)};  
  display: flex;
  justify-content: space-around;
  p{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0;
    margin-top: 12px;
    color:white;
  
  }
  h1{
    margin: 0;
    margin-top: 2px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:white;
  }
}

.icon{
    height: 30px;
    width: 30px;
    background-color:  ${({color})=>(color && color.mainColor)};  
    border-radius: 10px 0 0 0;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    position: absolute;
}
.icon_text{
  position: absolute;
  margin-left: 30px;
  background-color:#BEBEBE;
  height: 30px;
  border-radius: 0 0 10px 0;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
p{
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 15px;
  margin: 3px;
  margin-top: 6px;
  color: ${({color})=>(color && color.mainColor)};  
}
}
  i{
    margin-top: 5px;
    color: white;
  }
`
const Img = styled.img`
width: 80%;
height:190px;
margin-top: 0px;
max-width:510px;
`

const Product_Info = () => {

  const [content, switchContent] = useState('description');
  const [categories, setCategories]= useState('')
  const [businessModel, setBusinessModel]= useState('')
  const state = useSelector(state => state.data);
  const config = useSelector(state => state.config);
  const dispatch = useDispatch()

  function onClickToDescr(){
    switchContent('description')
  }
  function onClickToAtrib(){
    switchContent('atributes')
  }

  function handleChangeCateg(e){
    setCategories(e.target.value)
  }

  function handleChangeModel(e){
    setBusinessModel(e.target.value)
  }
  
  function handleFormCateg(e){
    e.preventDefault();
   dispatch(addCategorie(categories))
    setCategories('')
  }
  
  function handleFormModel(e){
    e.preventDefault();
   dispatch(addBusinessModel(businessModel))
   setBusinessModel('')
  }


    return (
        <Main color={config}>
            <div className="icon">
            <i class="fas fa-id-card-alt"></i>
            </div>
            <div className="icon_text">
              <p>StartUp</p> 
            </div>
            <Img src={state.picture}/>
            <div className="main_info">
               <h1><a href="https://innoloft.com/search?type=all&search=software" target="_blank">{state.name}</a></h1>
               <p><a href="https://innoloft.com/institutions/single/218/InnoloftGmbH9d924a69" target="_blank">{state.type.name}</a></p>
            </div>
            <div className='btns'>
            <Button 
            text='Description'
            onClick={onClickToDescr}
            myState={content}
            />
            <Button
            text='Atributes'
            onClick={onClickToAtrib}
            myState={content}
            />
            </div>
            {content === 'description' ? 
            <div className="descr">
            <p>{state.description}</p>
          </div>
          :
          <div>
            <div className="bottom_div">
            <ul>
              <p>Categories:</p>
              {state.categories.map(item=>{
                return <li>{"#" + item.name}</li>
              })}
        <form onSubmit={handleFormCateg} className="form">      
        <input
        placeholder="add"
        value={categories}
        onChange={handleChangeCateg}
        />
        <button className="btn">add</button>
        </form>
            </ul>
            
           
            <ul>
              <p>Business Models:</p>
              {state.businessModels.map(item=>{
                return <li>{"#" + item.name}</li>
              })}
              <form onSubmit={handleFormModel} className="form">      
               <input
                placeholder="add"
                 value={businessModel}
                 onChange={handleChangeModel}
               />
      <button className="btn">add</button>
      </form>
            </ul>
            </div>
            <h3>{state.trl.name}</h3>
          </div>
            }
            
        </Main>
    )
}

export default Product_Info
