import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Nosotros  from './pages/AboutUs/Nosotros.jsx';
import  Menu  from './pages/Menu/Menu.jsx';
import  Reserva from './pages/Reservations/Reserva.jsx';
import  Contacto  from './pages/ContactUs/contacto/Contacto.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Routes>

          <Route path="/" element={ <Nosotros /> } />
          <Route path="/menu" element={ <Menu /> } />
          <Route path="/reserva" element={ <Reserva /> } />
          <Route path="/contacto" element={ <Contacto /> } />

        </Routes>
  </Router>
    </div>
  );
}

export default App;
