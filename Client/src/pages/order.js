import React from 'react';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
padding: 40px 0px 7px 0px;
background-color: white;
display : flex;
flex-direction : column;
justify-content: center;
align-items: center;
`
const Content = styled.h1`
color : green;
padding : 20px;
margin : auto;
`
const Button = styled.button`
background-color : #f76425;
padding: 12px;
margin : auto;
cursor : pointer;
display: flex;
justify-content: center;
align-items: center;
margin : 5px;
width : 15%;
border-radius : 3px;
font-weight : 500;
border : none;
color : white;
font-size : 16px;
&:hover {
  transform : scale(1.01);
}
`
const Delivary = styled.div`
padding : 20px 20px 30px 20px;
font-weight : 600;
font-size : 20px;
`
const Image = styled.img`
width : 30%;
height : 20%;
`

const Order = () => {

    const current = new Date(new Date().getTime()+48*60*60*1000);
    const navigate = useNavigate();

  return (
    <Container>
        <Image src="https://www.pngitem.com/pimgs/m/511-5113198_emoji-emojicrown-stars-lightning-moon-crown-freetoedit-moon.png"/>
        <Content>Congratulations... Your order is Placed</Content>
        <Delivary>Delivary By : {current.toDateString()}</Delivary> 
        <Button onClick={()=>navigate('/')}>Home</Button>
    </Container>
  )
}

export default Order;
