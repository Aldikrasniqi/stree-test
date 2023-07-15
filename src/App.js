import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserContext } from './Utils/userContext';
import { useContext } from 'react';
function App() {
  const userData = localStorage.getItem('userData');
  console.log(userData);
  const isLoggedIn = !!userData;
  console.log(isLoggedIn);

  const { user } = useContext(UserContext);
  console.log(user.isLogged);
  // public routes and private routes not implemented yet
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
