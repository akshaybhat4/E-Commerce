import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    position : fixed;
    top : 0;
    width : 100%;
    height: 60px;
    background-color: #BF40BF;
    z-index : 2;
`
const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content: space-between;
`
const Left = styled.div`
    display : flex;
    flex : 1.5;
`
const Appname = styled.span`
    color : White;
    font-size : 180%;
    padding-left : 5px;
    font-style : italic;
    font-weight : bold;
    cursor : pointer;
`
/*const Center = styled.div`
    flex : 1;
    text-align : center;
`*/
const SearchContainer = styled.div`
    border : 0.5px solid black;
    background-color : white;
    text-align : center;
    display : flex;
    margin-left : 45px;
    padding : 6px;
`
const Input = styled.input`
    border : none;
    outline : none;
    padding : 0px 0px 0px 5px;
    width : 700px;
    align-items : center;
    justify-content : center;
`
const Right = styled.div`
    flex : 0.2;
    top : 0;
    display : flex;
    align-items : center;
    justify-content: flex-start;
`
const MenuItem = styled.div`
    cursor : pointer;
    color: white;
    margin : auto;
    font-weight : 600;
    font-size : 18px;
`
const MenuItems = styled.div`
    cursor : pointer;
    color: white;
    font-weight : 500;
    margin  : 1px;
    padding : 1px;
    font-size : 13px;
    &:hover {
        transform : scale(1.1);
    }
`
const MenuItems1 = styled.div`
    cursor : pointer;
    color: blue;
    border-radius : 2px;
    font-weight : 500;
    margin  : 5px;
    padding : 5px;
    background-color : white;
    font-size : 13px;
    &:hover {
        transform : scale(1.1);
    }
`
const LoginWrapper = styled.div`
padding : auto;
margin  :auto;
display : flex;
flex-direction : column;
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0,0);
      });

    const handleLogout = ()=>{
        localStorage.clear();
        window.location.href = '/';
    }

  return (
    <Container>
        <Wrapper>
            <Left>
                <Appname onClick={()=>navigate('/')}>Flipkart</Appname>
                <SearchContainer>
                    <Input placeholder='Search for products, brand and more...'/>
                    <Search /> 
                </SearchContainer>
            </Left>
            <Right>
                    <LoginWrapper>
                        {user ? '' :<MenuItems onClick={()=>navigate("/Signup")}>Signup</MenuItems>}
                        {user ? <MenuItem>{user.username.toUpperCase()}</MenuItem> : <MenuItems onClick={()=>navigate("/Signin")}>Login</MenuItems>}
                    </LoginWrapper>
                    <MenuItem onClick={()=>navigate('/cart')}>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                </MenuItem>
                {user ? <MenuItems1 onClick={()=>navigate('/myorders')}> My Orders </MenuItems1> : '' } 
                {user ? <MenuItems1 onClick={handleLogout}> Logout </MenuItems1> : ''}
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
