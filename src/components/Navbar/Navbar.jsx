import React from 'react';
import './navbar.css'
import logo from '../Navbar/logo.png'

function Navbar() {
    return (
        <div className='nav-container'>
            <nav>
            <img src={logo} alt='Logo' className='logo' />
                <ul>
                    <li><a href="/nosotros">Nosotros</a></li>
                    <li><a href="/menu">Menú</a></li>
                    <li><a href="/reserva">Reserva</a></li>
                    <li><a href="/contacto">Contáctanos</a></li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;