import { ArrowBackIosSharp, ArrowForwardIosSharp } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Slideritems } from './data'

const Container = styled.div`
    top: 56px;
    width : 100%;
    height : 62vh;
    display : flex;
    overflow : hidden;  
    position : relative;
`
const Arrow = styled.div`
    width : 50px;
    height : 50px;
    background-color : white;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center; 
    position : absolute;
    top : 0px;
    bottom : 0px;
    left : ${props => props.direction === "left" && "10px"};
    right : ${props => props.direction === "right" && "10px"};
    margin : auto;
    cursor : pointer;
    opacity : 1;
    z-index : 1;
`
const Wrapper = styled.div`
    height : 80%;
    display : flex;
    transform : translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    width : 100vw;
    height : 80vh;
    display : flex;
    align-item : center;
    background-color : ${(props) => props.bg};
`;
const Imagecontainer = styled.div`
    height : 80%;
    flex : 1;
`
const Image = styled.img`
    height : 94%;
    margin-left: 150px;
    background-color: red;
`
const Infocontainer = styled.div`
    flex : 1;
    padding : 0px;
    color : black;
`
const Title = styled.h1`
    font-size : 50px;
`
const Desc = styled.p`
    margin : 35px 0px;
    font-size : 20px;
    font-weight : 500;
    letter-spacing : 3px;
`
const Button = styled.button`
    padding : 7px;
    font-size : 20px;
    background-color : gary;
    cursor : pointer;
    border : none;
    border-radius : 10px;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState (0);
    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0? slideIndex-1 : 3);
        }
        else{
            setSlideIndex(slideIndex < 3? slideIndex+1 : 0);
        }
    };
  return (
        <Container>
            <Arrow direction = "left" onClick={()=>handleClick("left")}>
                <ArrowBackIosSharp />
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {Slideritems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                    <Imagecontainer>
                        <Image src={item.img} />
                    </Imagecontainer>
                    <Infocontainer>
                        <Title>
                           {item.title}
                        </Title>
                        <Desc>
                            {item.desc}
                        </Desc>
                        <Button>
                            Shop now
                        </Button>
                    </Infocontainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction = "right" onClick={()=>handleClick("right")}>
                <ArrowForwardIosSharp />
            </Arrow>
        </Container>
  )
}

export default Slider
