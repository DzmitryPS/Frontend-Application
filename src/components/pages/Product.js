import React from 'react'
import styled from 'styled-components';
import Product_Info from '../Product_info';
import User_Info from '../User_info';
import { useSelector } from 'react-redux';

const Main = styled.div`
 height: 700px;
 width: 1100px;
margin-left: 10px;
display: flex;
`

const Product = () => {

    const isLoaded = useSelector(state => state.isLoaded);
    const userSection = useSelector(state=>state.config)

    console.log(userSection)
    return (
        <div>
            {isLoaded ?
            <Main>
            <Product_Info/>
            {userSection.hasUserSection && <User_Info/>}
            </Main>
            :
            <p>loading...</p>
            }
        </div>
    )
}

export default Product
