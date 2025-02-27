import React, { useState, createContext, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Create Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("green-white");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "green-white" ? "fire" : "green-white"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={`navbar navbar-expand-lg ${theme === "fire" ? "bg-danger" : "bg-success"}`}>
      <div className="container-fluid">
        <a className="navbar-brand text-white">Themed App</a>
        <button onClick={toggleTheme} className={`btn ${theme === "fire" ? "btn-dark" : "btn-light"}`}>
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

const Content = () => {
  const { theme } = useTheme();
  return (
    <div className={`container mt-4 p-4 rounded ${theme === "fire" ? "bg-danger text-white" : "bg-light text-dark"}`}>
      <h1>{theme === "fire" ? "🔥 Fire Mode 🔥" : "🌿 Green-White Mode 🌿"}</h1>
      <p>This is a theme-switching app.</p>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
    </ThemeProvider>
  );
};

export default App;
