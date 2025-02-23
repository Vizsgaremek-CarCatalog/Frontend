import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import CarList from "./CarList";



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));


  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cars" element={isLoggedIn ? <CarList /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/cars" : "/login"} />} />
      </Routes>
    </Router>
  );
  
};

export default App;