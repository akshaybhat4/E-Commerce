import styled  from 'styled-components'
import React from 'react'
import CategoryItems from './CategoryItems';
import { categories } from './data';


const Container = styled.div`
    margin-top: 50px;
    display : flex;
    padding : 20px;
    justify-content : space-between;
    margin-bottom: 7%;
`

const Categories = () => {
  return (
        <Container>
            {categories.map(item =>(
                <CategoryItems item={item} key={item.id} />
            )) }
        </Container>
  );
};

export default Categories
