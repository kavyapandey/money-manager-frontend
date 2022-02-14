import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import './login.css';
import { useState } from 'react';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const [userDetail, setUserDetail] = useState({});

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(userDetail));
  },[userDetail])

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("https://managemoney-backend.herokuapp.com/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        });
        setUserDetail({uname : res.data.username, uId :res.data._id})
        res.data && window.location.replace("/dashboard");
      } catch (err) {
        console.log(err)
      }

    };
  
    return (
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className='form-group'>
          <label className='formlabel'><b>Username</b></label>
          <input
            type="text"
            className="form-control"
            placeholder="Username..."
            ref={userRef}
          />
          </div>
          <div className='form-group'>
          <label className='formlabel'><b>Password</b></label>
          <input
            type="password"
            className="form-control"
            placeholder="Password..."
            ref={passwordRef}
          />
           </div>
          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
        <span>
          <Link className="link" to="/register">
            Not a Member ?
          </Link>
        </span>
      </div>
    );
}

export default Login