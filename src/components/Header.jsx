import React from 'react'
import '../style/Header.css'
// on utilise NavLink au lieu de Link pour que l'utilisateur sache sur quelle page il navigue
import {NavLink} from 'react-router-dom'

function Header() {
    return (
    <nav className='navbar'>
        <NavLink to='/'>
        <div className='navbar__logo'>
            <img src='LOGO.png' alt='logo'/>
        </div>
        </NavLink>

        <NavLink to='/'>
            <span className='navbar__item'>Accueil</span>
        </NavLink>
        
        <NavLink to='/about'>
            <span className='navbar__item'>A Propos</span>
        </NavLink>
    </nav>
    )
};

export default Header;