import React from 'react';
import './navbar.css'
import logo from '../Navbar/logo.png'



function Navbar() {
    return (
        <div className='nav-container'>
            <nav>
                    <img src={logo} alt='Logo' className='logo' />
                <ul>
                    <li>
                        <a href="Nosotros">Nosotros</a>
                    </li>
                    <li>
                        <a href="Menu">Menu</a>
                    </li>
                    <li>
                        <a href="Contacto">Contacto</a>
                    </li>
                    <li>
                        <a href="Reserva">Reserva</a>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;