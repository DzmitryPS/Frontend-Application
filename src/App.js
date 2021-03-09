import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Top from './components/atoms/Top';
import styled from 'styled-components';
import Burger from '../src/components/navbar/Burger';

const MainDiv = styled.div`
 display: flex;
 justify-content: center;
 margin: 10px;
`

function App() {

  return (
    <div className="App">
    <Top/>
    <MainDiv>
   <Burger/>  
   <Switch>
   <Route exact path='/'
        render={props=> <Home {...props}/>}
        />
     <Route path='/Product'
        render={props=> <Product {...props}/>}
        />    
   </Switch>
   </MainDiv>  
    </div>
  );
}

export default App;
