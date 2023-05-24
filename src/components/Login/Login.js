import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
import "./login.css";

const Login = () => {

  const { state } = useLocation()
// console.log(state.location)

  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")

  const {login, googleSignIn} =useAuth()
  const navigate=useNavigate()

  async function handleSubmit(e){
    e.preventDefault();
    try{
      setLoading(true)
      await login(email,password)
      setLoading(false)
      navigate(state?.location ? state.location : "/")
      
    }catch{
      setLoading(false)
      setError("Failed to sing in. Maybe your email or password is wrong.")
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <br /><br />
      <form className="form-input" onSubmit={handleSubmit}>
        <input type="email"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password"  name="password"  value={password} onChange={(e)=>setPassword(e.target.value) }/>
        <button disabled={loading} type="submit">Login</button>
        <Link to="/signup"> <p style={{color:"blue",fontSize:"1.2rem"}}>Signup Instead</p> </Link>
        {error && <h3 style={{color:"red"}}>{error}</h3>}
        <p>------------------------</p>
        
      </form>
      <button style={{backgroundColor:"blue"}} onClick={googleSignIn}>Google SignIn</button>
    </div>
  );
};

export default Login;
