import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContexts";
import "./Signup.css";


const Signup = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState("")

    const [loading,setLoading]=useState()
    const [error,setError]=useState()

    const navigate=useNavigate()

    const {signup}=useAuth()

    async function handleSubmit(e){
        e.preventDefault()
        try{
            setLoading(true)
            setError(false)
            await signup(email,password,name)
            navigate('/')
            
        }catch{
            setLoading(false)
            setError("Failed to create Account.")
        }
    }

    return (
        <div>
            <h2>Welcome to SignUp Page.</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} type="text" value={name} name="name"    />
                <input placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} type="email" value={email} name="email"    />
                <input placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} type="password" value={password} name="password"   />
                <input placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)} type="password" value={confirmPassword} name="confirmPassword"    />
                <Link to="/login"><p style={{color:'blue', fontSize:"1.2rem"}}>Login Instead</p></Link>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;