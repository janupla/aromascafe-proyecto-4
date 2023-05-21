
import React, { useState } from 'react';
import './navbar.css'
import logo from '../Navbar/logo.png'



function Navbar() {

    const [nav, setNav] = useState(false)
    const toggleNav = () => {
        setNav(!nav)
    }

    return (
        <header className='cabecera'>
            <button className='cabecera-button' onClick={toggleNav}>

                <svg className='cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <nav className={`cabecera-nav ${nav ? 'isActive' : ''}`}>
                <img src={logo} alt='Logo' className='logo' />
                <ul className='cabecera-ul'>
                    <li className='cabecera-li'>
                        <a className='cabecera-a' href="Nosotros">Nosotros</a>
                    </li>
                    <li className='cabecera-li'>
                        <a href="Menu" className='cabecera-a'>Menu</a>
                    </li>
                    <li className='cabecera-li'>
                        <a href="Contacto" className='cabecera-a'>Contacto</a>
                    </li>
                    <li className='cabecera-li'>
                        <a href="Reserva" className='cabecera-a'>Reserva</a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Navbar;
