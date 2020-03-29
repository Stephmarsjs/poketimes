import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
         <div className="container">
           <a className="brand-logo">Poke'Times</a>
           <ul className="right">
               <li><link to="/home">Home</link></li>
               <li><link to="/about">About</link></li>
               <li><link to="/contact">Contact</link></li>
            </ul> 
        </div>
     </nav>
    )
}

export default Navbar