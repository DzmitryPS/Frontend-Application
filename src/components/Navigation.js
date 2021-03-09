import React from 'react'
import styled from 'styled-components';
import { Link} from 'react-router-dom';

const Div = styled.div`
 display: flex;
 flex-direction: column;
 height: 700px;
 min-width:170px;
`
const Ul = styled.ul`
list-style: none;
padding-left: 0px;
li{
  letter-spacing: 0.84px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding: 10px;
  transition: 0.3s ease-in;
  text-align: left;
}
li:hover{
    background-color:#BEBEBE;
}
a{
    text-decoration: none;
    color: black;
}
`

const Navigation = () => {
    return (
        <Div>
              <Ul>
              <Link to="/"><li className="link"><i class="fas fa-home"></i> Main page</li></Link>
              <Link to="/Product"><li className="link"><i class="fas fa-id-card-alt"></i> Product</li></Link>
              </Ul>
        </Div>
    )
}

export default Navigation
