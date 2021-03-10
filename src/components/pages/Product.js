import React from 'react'
import styled from 'styled-components';
import Product_Info from '../Product_info';
import User_Info from '../User_info';
import { useSelector } from 'react-redux';

const Main = styled.div`
height: 700px;
width: 100%;
margin-left: 10px;
display: flex;

@media (max-width: 695px) {
    flex-wrap: wrap;
    justify-content: center;
}
`

const Product = () => {

    const isDataLoaded = useSelector(state => state.isDataLoaded);
    const userSection = useSelector(state=>state.config)
    const isConfigLoaded = useSelector(state=>state.isConfigLoaded)

    return (
        <div>
            {isDataLoaded
             ?
            <Main>
            <Product_Info/>
            {isConfigLoaded 
            ?
           <>{userSection.hasUserSection && <User_Info/>}</>
            :
            <>loading...</>}
            </Main>
            :
            <>loading...</>
            }
        </div>
    )
}

export default Product
