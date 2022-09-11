import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { publicRequest } from "../components/requestMethods";
import { loginFailure, loginStart, loginSuccess } from '../redux/loginRedux';
import {Home} from "./home.js";


const ContainerSU = styled.div`
  padding : 50px;
  margin : 40px; 
`
const Wrapper = styled.div`
  display : flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Left = styled.div`
  flex : 0.3;
  background-color: royalblue;
  border-radius : 3px;
`
const HH1 = styled.div`
font-weight : 600;
font-size : 23px;
color : white;
padding : 25px 5px;
margin : 4px;
`
const HH2 = styled.div`
font-weight : 500;
font-size : 17px;
color : white;
padding : 5pxpx;
margin : 5px;
`
const Image = styled.img`
width : 100%;
height : 50%;
`
const Right = styled.div`
  flex : 1;
  width : 100%;
  padding : 15px;
  margin : 14px;
`
const Form = styled.form`
  display : flex;
  flex-direction: column;
`
const Label = styled.label`
  margin-top : 19px;
  color : #c1c4c0;
  font-weight : 400;
`
const InputSU = styled.input`
  padding : 5px;
  margin : 5px;
  width : 40%;
  align-items : center;
  border : none;
  outline : none;
  border-bottom : 1.4px solid royalblue;
`
const Button = styled.button`
  background-color: #ff5521;
  border : none;
  outline : none;
  padding : 15px;
  margin-top : 15px;
  width : 41%;
  align-items : center;
  color : white;
  font-weight : 600;
  font-size : 16px;
  cursor : pointer;
`
const Error = styled.span`
color : red;
padding-top : 10px;
font-weight : 600;
font-size : 17px;
`
function Signin() {
  const errRef = useRef();
  const userRef = useRef();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  },[]);

  useEffect(()=>{
    setErrorMsg('');
  },[username, password]);

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try{
      const res = await publicRequest.post("/auth/login",{username, password});
      dispatch(loginSuccess(res.data));
      setSuccess(true);
      setUserName('');
      setPassword('');
    }
    catch(err){
      dispatch(loginFailure());
      setErrorMsg("Entered Username or Password is incorrect..");
      errRef.current.focus();
    }
  }
  return (
    <>

    {success ? <Home /> :
      <ContainerSU>
      <Wrapper>
        <Left>
          <HH1>You Are One Step Away!!</HH1>
          <HH2>Sign-in to explore more...</HH2>
          <Image src="https://pbs.twimg.com/profile_images/1267713887165485061/WUR4QXtd_400x400.jpg"/>
        </Left>
        <Right>
          <Form autoComplete='off' method="post" onSubmit={handleLogin}>
            <Label>User Name</Label>
            <InputSU 
              ref={userRef}
              onChange={(e)=>setUserName(e.target.value)} 
              type="text" 
              placeholder="Enter Your Name" 
              name="name" 
              minLength= "2" 
              maxLength="30" 
              value={username}
              required 
            />
            <Label htmlFor="psw">Password</Label>
            <InputSU 
              onChange={(e)=>setPassword(e.target.value)} 
              type="password" 
              placeholder="Enter Password" 
              value={password}
              minLength= "8" 
              maxLength="15" 
              required 
            />
            <Button type='submit'>SignIn</Button>
            <Error ref={errRef} className={errorMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errorMsg}</Error>
          </Form>
        </Right>
      </Wrapper>      
</ContainerSU>}
</>
  )
}

export default Signin
