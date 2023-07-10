import { useState } from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Navbar from "./Components/Common/Navbar"
import './App.css'
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Common/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Reg from './Pages/Member/Register';
import Log from './Pages/Member/Login';
import Dash from "./Pages/Member/Dashboard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar />


    <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mem/login" element={<Log />} />
          <Route path="/mem/register" element={<Reg />} />

          <Route path="/mem/dashboard" element={<Dash />} />
        </Routes>
    </Router>

    <Footer />
    </>
  )
}

export default App
