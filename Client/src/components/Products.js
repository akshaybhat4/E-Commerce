import React from 'react'
import ProductItem from './ProductItem'
import styled from 'styled-components'
import { popularProducts } from './data'

const Container = styled.div`
    padding : 25px;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
    position : relative;
    background-color: #e9f0ea;
`
const Para = styled.p`
    top: 0;
    font-weight: 700;
    font-size : 18px;
    position : absolute;
`
const Products = () => {
  return (
    <Container>
        <Para>Trending Offers</Para>
        {popularProducts.map((item)=>(
            <ProductItem item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products
