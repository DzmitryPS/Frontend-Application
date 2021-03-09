import React from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import { useDispatch, useSelector } from 'react-redux'
import  {changeOpen} from '../actions/actions';


const StyledBurger = styled.div`
	cursor: pointer;
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 22px;
	right: 12px;
	display: none;
    
	@media (max-width: 1000px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}
	div {
		width: 2rem;
		height: 0.25rem;
		background-color: black;
		transform-origin: 1px;
	}
`;

const Burger = () => {

    const state = useSelector(state=>state.setOpen)
    const dispatch = useDispatch()

	return (
		<>
			<StyledBurger
				open={state}
				onClick={() => dispatch(changeOpen())}
			>
				<div />
				<div />
				<div />
			</StyledBurger>
			<RightNav open={state} />
		</>
	);
};

export default Burger;