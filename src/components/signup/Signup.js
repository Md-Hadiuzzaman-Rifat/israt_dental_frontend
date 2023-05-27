import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContexts";
import "./Signup.css";

const Signup = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState("")

    const [loading,setLoading]=useState(true)
    const [error,setError]=useState()

    const navigate=useNavigate()

    const {signup}=useAuth()

    async function handleSubmit(e){
        e.preventDefault()

        if(password !== confirmPassword){
            setError("Password didn`t match.")
            return
        }else{
            if(password.length<6){
                setError("Password contain more than or equal 6 character.")
                return
            }else{
                try{
                    setLoading(true)
                    setError(false)
                    await signup(email,password,name)
                    navigate('/')
                }catch{
                    setLoading(false)
                    setError("Failed to create Account.")
                    return
                }
            }
        }
    }

    return (
        <div>
            <h2 style={{marginBottom:"3rem", marginTop:"2rem"}}>Welcome to SignUp Page.</h2>
            <form className='form-input' onSubmit={handleSubmit}>
                <input placeholder='Enter Full Name' onChange={(e)=>setName(e.target.value)} type="text" value={name} name="name"    />
                <input placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} type="email" value={email} name="email"    />
                <input placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} type="password" value={password} name="password"   />
                <input placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)} type="password" value={confirmPassword} name="confirmPassword"    />
                <button type="submit">Signup</button>
                {error && <h3 style={{color:"red"}}>{error}</h3>}
            </form>
                <Link to="/login"><p style={{color:'blue', fontSize:"1.2rem"}}>Login Instead</p></Link>
        </div>
    );
};

export default Signup;