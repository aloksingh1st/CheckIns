import { useState } from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Navbar from "./Components/Common/Navbar"
import './App.css'
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Common/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
// import Calendar from './Pages/Calender';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />

    <Router>

    <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Calender"element={<Calendar />} />
        </Routes>
    </Router>

    <Footer />
    </>
  )
}

export default App
