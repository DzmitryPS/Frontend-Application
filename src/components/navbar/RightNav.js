import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector} from 'react-redux'
import  {changeOpen} from '../actions/actions';
import { Link} from 'react-router-dom';


const Ul = styled.ul`
list-style: none;
padding-left: 0px;
height: 0px;
width: 150px;

li{
  letter-spacing: 0.84px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding: 10px;
  transition: 0.3s ease-in;
  text-align: left;
  margin-top: 0px;
}
li:hover{
    background-color:#BEBEBE;
}
a{
    text-decoration: none;
    color: black;
}
hr{
display: none;
}

@media (max-width: 1000px) {
		flex-flow: column nowrap;
		background-color: #F0F0F0;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(80%)" : "translateX(100%)")};
		top: 0;
		right: 0;
		width: 100%;
		margin-top: 56px;
		padding: 5px 0 80px 0;
		transition: transform 0.3s ease-in-out;
     li{
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        margin:auto;
    .fa-home {
        margin-left: 30px;
    }
    .fa-id-card-alt{
        margin-left: 47px;
    }
     }    
    hr{
       display: block;
       margin: 0
      }
	}
    @media (max-width: 695px) {

		transform: ${({ open }) => (open ? "translateX(70%)" : "translateX(100%)")};
    }
    @media (max-width: 500px) {
transform: ${({ open }) => (open ? "translateX(60%)" : "translateX(100%)")};
}
@media (max-width: 500px) {
transform: ${({ open }) => (open ? "translateX(50%)" : "translateX(100%)")};
}
`

const RightNav = () => {

    const dispatch = useDispatch()
    const state = useSelector(state=>state.setOpen)
	

	return (
		<div>
              <Ul open={state} >
              <Link to="/" onClick={() => dispatch(changeOpen())}><li className="link"><i class="fas fa-home"></i> Main page</li></Link><hr></hr>
              <Link to="/Product" onClick={() => dispatch(changeOpen())}><li className="link"><i class="fas fa-id-card-alt"></i> Product</li></Link>
              </Ul>
        </div>
	);
};

export default RightNav;