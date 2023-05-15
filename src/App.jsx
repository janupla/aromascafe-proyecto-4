import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Routes>
          
          <Route>
            path="/"
            element={<Nosotros />}
          </Route>
          <Route>
            path="/menu"
            element={<Menu />}
          </Route>
          <Route>
            path="/reservations"
            element={<  Reserva />}
          </Route>
          <Route>
            path="/contacto"
            element={<Contacto />}
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
