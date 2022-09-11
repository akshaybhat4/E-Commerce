import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 2px;
  height: 40vh;
  position: relative;
  display : flex:
  justify-content: center;
  align-item : center;
`;

const Image = styled.img`
  border-radius : 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  top: 0;
  left: 0;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin : auto;
`;

const Title = styled.h4`
    color:Black;
    margin: 0;
    `;
const Moreinfo = styled.p`
    font-size : 12px;
    color : green;
`


const Button = styled.button`
    border:none;
    border-radius : 10px;
    padding: 6px;
    background-color: #07b9f5;
    color:Black;
    cursor: pointer;
    font-weight: 500;
`;

const CategoryItems = ({item}) => {
  const navigate = useNavigate();
  return (
        <Container>
            < Image src={item.img} />
              <Info>
                  <Title>{item.title}</Title>
                  <Moreinfo>{item.Moreinfo}</Moreinfo>
                  <Button onClick={()=>navigate(`/products/${item.cat}`)}>Shop now</Button>
              </Info>
        </Container>
  );
};

export default CategoryItems;
