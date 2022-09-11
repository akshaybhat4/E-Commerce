import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
padding : 70px;
display: flex;
flex-direction: column;
`
const Title = styled.div`
  padding: 20px;
  font-weight: 700;
  font-size : 22px;
`
const CartItem = styled.div`
display : flex;
padding : 20px;
box-shadow: 0px 10px 22px 0px #e4e3e6;
`
const Image = styled.img`
width : 120px;
height : 160px;
`
const Info = styled.div`
padding : 0px 15px;
`
const Name = styled.div`
padding : 5px;

display : flex;
align-items : center;
justify-content : center;
font-size : 15px;
font-weight : 500;
`
const Price = styled.div`
padding : 5px 200px;
display : flex;
flex : 1;
justify-content : flex-end;
font-weight : 600;
font-size : 18px;
color : green;
`
const Size = styled.div`
padding : 5px;
color : gray;
font-weight : 500;
font-size : 15px;
`
const Brand = styled.div`
padding : 5px;
color : #445063;
font-weight : 500;
font-size : 15px;
`
const Color = styled.div`
padding : 5px;
color : gray;
font-weight : 400;
font-size : 15px;
`

const MyOrders = () => {
    const cart = useSelector(state => state.cart);
  return (
    <Container>
          <Title>My Orders</Title>
          {cart.order.map((product) => (
          <CartItem key={product._id}>
            <Image src={product.img} />
            <Info>
              <Name>{product.desc}</Name>
              <Brand>Brand : {product.title}</Brand>
              <Size>Size : {product.size}</Size>              
              <Color>Color : {product.color}</Color>
            </Info>
            <Price>₹{product.price*product.quantity}</Price>    
          </CartItem>
          ))}
    </Container>
  )
}

export default MyOrders
