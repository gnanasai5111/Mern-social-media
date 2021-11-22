
import React, { useContext } from 'react';
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Register from "./pages/register/Register.jsx";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import { AuthContext } from './context/AuthContext.js';


function App() {
  const {user}=useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> :<Register />} />
  
        <Route path="/login" element={user ? <Navigate to="/" /> :<Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> :<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>


  );
}

function Notfound(){
  return (
    <h1>404....Page Not Found</h1>
  )
}

export default App;
