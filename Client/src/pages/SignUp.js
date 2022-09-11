//youtube.com/watch?v=iw5RSIflYGU
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { publicRequest } from "../components/requestMethods";
import Signin from "./Signin";


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
const Error = styled.div`
color : red;
padding-top : 10px;
font-weight : 600;
font-size : 17px;
`
function Signup() {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const [mob, setMob] = useState("");
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  },[]);

  useEffect(()=>{
    setErrorMsg("");
  },[username, password, mob]);


  const handleRegister = async (e)=>{
    e.preventDefault();
    try{
        const res = await publicRequest.post(`/auth/register`, {username, mob, password});
        //dispatch(signupSuccess(res.data));
        setSuccess(true);
        setName('');
        setPass('');
        setMob('');
    }
    catch(err){
        setErrorMsg('Enter Valid Username, Mobile Number or Password..');
        errRef.current.focus();
    }
  }

  return (
   <>
    { success ? <Signin /> :
      <ContainerSU>
      <Wrapper>
        <Left>
          <HH1>Looks like you're new here!</HH1>
          <HH2>Sign up with your mobile number to get started</HH2>
          <Image src="https://pbs.twimg.com/profile_images/1267713887165485061/WUR4QXtd_400x400.jpg"/>
        </Left>
        <Right>
          <Form autoComplete='off' method="post" onSubmit={handleRegister}>
            <Label>User Name</Label>
            <InputSU 
              ref={userRef}
              type="text" 
              placeholder="Enter Your Name" 
              name="username" 
              minLength= "2" 
              maxLength="30" 
              onChange={(e)=>setName(e.target.name=e.target.value)} 
              value={username}
              required 
            />

            <Label htmlFor="mbl">Mobile Number</Label>
            <InputSU 
              type="text" 
              pattern='[6789][0-9]{9}' 
              placeholder="Enter Mobile Number" 
              name="mob" 
              minLength="10" 
              maxLength="10" 
              value={mob}
              onChange={(e)=>setMob(e.target.name=e.target.value)} 
              required 
            />

            <Label htmlFor="psw">Password</Label>
            <InputSU 
              type="password" 
              placeholder="Enter Password" 
              name="password" 
              minLength= "8" 
              maxLength="15" 
              value={password}
              onChange={(e)=>setPass(e.target.name=e.target.value)} 
              required 
            />
            <Button type='submit'>Signup</Button>
            <Error ref={errRef} className={errorMsg ? "errorMsg" : "offscreen"} aria-live="assertive">{errorMsg}</Error>
          </Form>
        </Right>
      </Wrapper>
</ContainerSU>
}
</> 
  )};
export default Signup
