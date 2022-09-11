import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router";
import ProductCon from '../components/ProductCon';
import axios from 'axios';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 40px 0px 7px 0px;
  background-color: white;
  `
const Top = styled.div`
display : flex;
`
const TopLeft = styled.div`
  flex : 1;
`
const TopRight = styled.div`
  flex : 1;
  padding : 70px 0px 0px 10px;
`
const FilterBy =styled.span`
  font-weight : 500;
  font-size : 14px;
  padding : 10px;
  color : #f207c3;
`
const Label =styled.label`
font-weight : 500;
font-size : 14px;
padding : 5px;
`
const Select =styled.select`
font-weight : 500;
font-size : 14px;
padding : 3px;
cursor : pointer;
`
const Option =styled.option`
`
const Title = styled.h3`
  padding : 10px 0px 0px 10px;
`
const SortBy = styled.span`
  font-weight : 500;
  font-size : 14px;
  padding : 15px;
  color : #f207c3;
`
const Sort = styled.button`
  padding : 10px;
  font-weight : 600;
  font-size : 14px;
  border : none;
  background-color : white;
  &: hover {
    cursor : pointer;
    color : blue;
    transition: all 0.5s ease;
  }
`
const Bottom = styled.div``

function ProductsPage() {
const location = useLocation([]);
const cat = location.pathname.split("/")[2];
const[filter, setFilter] = useState({});
const[sort, setSort] = useState("newest");
const [products, setProducts] = useState([]);

useEffect(() => {
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

const handleFilters = (e) => {
  const value = e.target.value;
  setFilter({
    ...filter,
    [e.target.name] : value,
  });
};

  return (
    <Container>
      <Wrapper>
        <Top>
          <TopLeft>
            <Title>{cat}</Title>
            <SortBy>Sort By :</SortBy>
            <Sort value="asc" onClick={e => setSort(e.target.value)}>Price -- Low to High</Sort>
            <Sort value="desc" onClick={e => setSort(e.target.value)}>Price -- High to Low</Sort>
            <Sort value="newest" onClick={e => setSort(e.target.value)}>Newest First</Sort> 
          </TopLeft>
          <TopRight>
            
          <FilterBy>Filter By :</FilterBy>
            <Label htmlFor="brands">Choose a Brand:</Label>

            <Select name="title" id="brands" onChange={handleFilters}>
              <Option value="none" selected disabled hidden>Select an Option</Option>
              {products.map((prod,id) => (
              <Option prod={prod} key={id}>{prod.title}</Option>
            ))}
            </Select>

            <Label htmlFor="brands">Choose a Size:</Label>
            <Select name="size" id="size" onChange={handleFilters}>
            <Option value="none" selected disabled hidden>Select an Option</Option>
              <Option value="XS">XS</Option>
              <Option value="S">S</Option>
              <Option value="M">M</Option>
              <Option value="L">L</Option>
              <Option value="XL">XL</Option>
            </Select>
          </TopRight>
        </Top>
        <Bottom>
          <ProductCon cat={cat} filter={filter} sort={sort} />
        </Bottom> 
      </Wrapper>
    </Container>
  )
}

export default ProductsPage
