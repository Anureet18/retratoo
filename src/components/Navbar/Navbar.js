import React from 'react'
import { FaCartPlus,FaGripLines } from "react-icons/fa";
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div className='navbar'>
        <Container>
            <div className='icon-fa'><FaGripLines/></div>            
            <div className='icon'>
                <NavLink to="/login" className='icon-fa' >About Us</NavLink>
                <NavLink to="/login" className='icon-fa' >Login</NavLink>
                <NavLink to="/shoppingcart" className='icon-fa'><FaCartPlus  /></NavLink>
            </div>
            </Container>
        </div>
    )
}

export default Navbar
