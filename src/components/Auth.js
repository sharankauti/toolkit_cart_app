import React from "react";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useNavigate } from "react-router-dom";

import "./Auth.css";


const Auth = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [valid,setFormvalid] = useState(false);
  const dispatch = useDispatch()
  const handleAuth = (event)=>{
    event.preventDefault();
    if (!valid) {
      alert('please enter email and password')
    }
    if (valid) {
      dispatch(authActions.login())
      navigate('/layout')
      
    }
    
  }
useEffect(()=>{
  if (email.includes('@') && password.trim().length >= 4) {
    setFormvalid(true)
  }

  return ()=>{
    console.log(valid);
  }
  
 
},[email,password,valid])



const handleEmail = (event)=>{
  setEmail(event.target.value)
}
const handlePassword = (event)=>{
  setPassword(event.target.value)
}
  

  return (
    <div className="container">
      <h1>Login </h1>
      <form onSubmit={handleAuth}>
        <label htmlFor="Email">Email</label>
        <input style={{border: !valid ? '5px solid red' : ''}} type="email" onChange={handleEmail} name="Email"/>
        <label htmlFor="password">Password</label>
        <input style={{border: !valid ? '5px solid red' : ''}} type="password" onChange={handlePassword} name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
