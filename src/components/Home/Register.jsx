import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("https://managemoney-backend.herokuapp.com/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
      <div className='form-group'>
        <label className='formlabel'>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div className='form-group'>
        <label className='formlabel'>Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='form-group'>
        <label className='formlabel'>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <span>
        <Link className="link" to="/">
          Login
        </Link>
      </span>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}
