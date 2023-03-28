import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";

const Login = () => {
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")

  const {login} =useAuth()
  const navigate=useNavigate()

  async function handleSubmit(e){
    e.preventDefault();
    try{
      setLoading(true)
      await login(email,password)
      setLoading(false)
      navigate('/')
    }catch{
      setLoading(false)
      setError("Failed to sing in.")
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="email"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password"  name="password"  value={password} onChange={(e)=>setPassword(e.target.value) }/>
        <Link to="/signup"> <p style={{color:"blue",fontSize:"1.2rem"}}>Signup Instead</p> </Link>
        <button disabled={loading} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
