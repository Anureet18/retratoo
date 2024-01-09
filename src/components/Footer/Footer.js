import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import './Footer.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footdisplay'>
               <div className='para'><h2>retratoo</h2>
               <p>To add a texture to the background <br/> color, you can use  a combination <br/> of CSS background</p>
               <h5>anureetkauras18@gmail.com</h5> 
               </div>
                <div className='foot m-0'>
                    <div className='footer-column'>
                        <img className='footer-img' src='./images/logo 2.png' alt='' />
                        <h4>Follow Us</h4>
                        <Link to="/"><FaFacebookF /></Link>
                        <Link to="/"><FaWhatsapp /></Link>
                        <Link to="/"><FaInstagram /></Link>
                    </div>
                    <div className='footer-column'>
                        <h4>Quick Links</h4>
                        <Link to="/">Home</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">Contact Us</Link>
                    </div>
                    <div className='footer-column'>
                        <h4>Contact Us</h4>
                        <Link to="/">Call us</Link>
                        <Link>Hours: Mon  </Link>
                        <Link to="/">anureet</Link>
                    </div>
                </div>
            </div>
            <hr/>
            <p className='copyright'>© retratoo All rights reserved</p>
        </div>
    )
}

export default Footer
