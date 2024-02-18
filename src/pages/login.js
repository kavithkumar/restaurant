import { useState } from "react";
import login from "../services/userservice";
import { useNavigate } from "react-router-dom";
import UserService from "../services/userservice";
import './loginform.css';

function Login({setUsername}){
    let [user,setUser]=useState({'email':'','password':''})
    const navigate=useNavigate();
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setUser({...user,[name]:value})
    }
    const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(e)
     console.log(user)
     validateUser(user)
    }
    function parseJwt(token) {//to extract the payload from JWT
        if (!token) { return }
        const base64Url = token.split('.')[1]
        console.log(base64Url)
        console.log(JSON.parse(window.atob(base64Url)))
        return JSON.parse(window.atob(base64Url))
      }
    const validateUser=async (user)=>{
        try{
          const response=await UserService.login(user)
          console.log(response)
          console.log(response.data)
          let token=response.data//JWT token
          console.log(parseJwt(token))
          let userData=parseJwt(token)//sub,iss,iat,exp,role
          localStorage.setItem('token',JSON.stringify(token))
          localStorage.setItem('username',userData.username);
          setUsername(userData.username)
          console.log(userData)
          navigate('/')
        }catch(error){
            console.log(error)
        }
    }
    return(
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    )
}


export default Login;