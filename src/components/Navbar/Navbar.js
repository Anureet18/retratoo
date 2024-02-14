import React, { useState } from 'react'
import { FaCartPlus, FaGripLines } from "react-icons/fa";
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../store/auth';

const Navbar = () => {

    const { isLoggedIn } = useAuth();
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
        <div className='navbar'>
            <Container>
                <div className={`menu icon-fa ${menu ? 'active' : ''}`} onClick={toggleMenu}><FaGripLines />
                    {menu && (
                        <ul>
                            <li>home</li>
                            <li>About</li>
                            <li>Gallery</li>
                            <li>Login</li>
                        </ul>
                    )}
                </div>
                {!menu && (
                    <div className="icon">
                        <NavLink to="/gallery" className="icon-fa">
                            Gallery
                        </NavLink>
                        <NavLink to="/login" className="icon-fa">
                            About Us
                        </NavLink>
                        {isLoggedIn ? (
                            <NavLink to="/logout" className="icon-fa">
                                Logout
                            </NavLink>
                        ) : (
                            <NavLink to="/login" className="icon-fa">
                                Login
                            </NavLink>
                        )}
                        <NavLink to="/shoppingcart" className="icon-fa">
                            <FaCartPlus />
                        </NavLink>
                    </div>
                )}
            </Container>
        </div>
        </>
    )
}

export default Navbar
