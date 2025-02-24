import React, { useState } from "react";
import axios from "./axiosConfig";  
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", { email, password });
  
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("userId", response.data.userid);
  
      onLogin(); 
      navigate("/cars");
    } catch (error) {
      console.error("Login failed", error);
      alert(error.response?.data?.message || "Login failed");
    }
  };
  
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


export default Login;