import React from 'react'
//import Navbar from '../components/Navbar'
import Slider from '../components/Slider.js'
import Categories from '../components/Categories';
import Products from '../components/Products';
//import MyFooter from '../components/MyFooter'; 
//import ProductsPage from './ProductsPage';

export const Home = () => {
  return (
     <div>
      <Slider />
      <Categories />
      <Products /> 
   </div>
  );
}

