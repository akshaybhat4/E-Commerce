import styled from 'styled-components'
import React, { useEffect, useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
display : flex;
flex : 1;
background-color : #faf9f7;
padding : 10px;
margin : auto;
overflow: hidden;
flex-wrap : wrap;
justify-content : space-evenly;
align-item : center;
`;

const WrapperInner = styled.div`
&:hover {
  cursor : pointer;
  transform: scale(1.04);
  transition: all 0.5s ease;
}
`
const ImageContainer = styled.div`
  top:10px;
  border-radius : 8px;
  flex: 1;
  margin: 5px;
  min-width: 220px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content : space-evenly;
  background-color: #f5fbfd;
`
const Image = styled.img`
  height : 80%;
  z-index: 1;
`
const InfoContainer = styled.div`
margin-left : 20px;
`
const ImageTitle = styled.div`
  font-weight : 500;
  color : #8a8987;
  font-size : 14px;
  padding : 2px;
`
const Desc = styled.div`
  font-weight : 490;
  font-size : 14px;
  padding : 2px;
`
const Color = styled.div`
  font-weight : 450;
  color : #8a8987;
  font-size : 12px;
  padding : 2px;
`
const Price = styled.span`
  font-weight : 500;
  font-size : 14px;
  padding : 2px;
  padding-right : 4px;
`
const BaseP = styled.span`
font-weight : 500;
font-size : 14px;
color : #8a8987;
text-decoration: line-through;
padding : 2px;
padding-right : 4px;
`
const Offers = styled.span`
font-weight : 500;
font-size : 14px;
padding : 2px;
color : green;
padding-right : 4px;
`
const ProductCon = ({cat, filter, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
    const getProducts = async () => {
        try{
        const res = await axios.get(
            cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        }
        catch(err){}
    };
    getProducts();
    },[cat]);

    useEffect(() => {
        cat && setFilteredProducts(
          products.filter((item) => 
          Object.entries(filter).every(([key, value]) => 
          item[key].includes(value)))
        );
      },[products, cat, filter]);
      
      useEffect(() => {
        if(sort === "newest") {
          setFilteredProducts((prev) => 
            [...prev].sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
          );
        }
        else if(sort === "asc") {
          setFilteredProducts((prev) => 
            [...prev].sort((a,b) => a.price - b.price)
          );
        }
        else {
          setFilteredProducts((prev) => 
            [...prev].sort((a,b) => b.price - a.price)
          );
        }
      },[sort]);

      return (
        <Container>
          {cat
            ? filteredProducts.map((item) => (
                <WrapperInner item={item} key={item._id} onClick={()=>(navigate(`/product/${item._id}`))}>
                      <ImageContainer>
                        <Image src={item.img} />
                      </ImageContainer>
                      <InfoContainer>
                        <ImageTitle>{item.title}</ImageTitle>
                        <Desc>{item.desc}</Desc>
                        <Color>{item.color}</Color>
                        <Price>₹{item.price}</Price>
                        <BaseP>₹{item.basePrice}</BaseP>
                        <Offers>{item.offer}</Offers>
                      </InfoContainer>
                  </WrapperInner>
            ))
            : products.map((item) => (
                <WrapperInner item={item} key={item._id} onClick={()=>(navigate(`/product/${item._id}`))}>              
                      <ImageContainer>
                        <Image src={item.img} />
                      </ImageContainer>
                      <InfoContainer>
                        <ImageTitle>{item.title}</ImageTitle>
                        <Desc>{item.desc}</Desc>
                        <Color>{item.color}</Color>
                        <Price>₹{item.price}</Price>
                        <BaseP>₹{item.basePrice}</BaseP>
                        <Offers>{item.offer}</Offers>
                      </InfoContainer>                  
                  </WrapperInner>
                ))
            }
        </Container>
      );
    };
    
    export default ProductCon;