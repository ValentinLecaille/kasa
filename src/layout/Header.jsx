import React from 'react'
import '../style/Layout/Header.css'
// on utilise NavLink au lieu de Link pour que l'utilisateur sache sur quelle page il navigue
import {NavLink} from 'react-router-dom'

function Header() {
    return (
    <nav className='navbar'>
        <NavLink to='/'>
            <img className='navbar__logo' src='LOGO.png' alt='logo'/>
        </NavLink>

        <div className='navbar__item--container'>
        <NavLink className='navbar__item' to='/'>Accueil</NavLink>
        
        <NavLink className='navbar__item' to='/about'>A Propos</NavLink>
        </div>
    </nav>
    )
};

export default Header;