import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import "../Login/Login.css"
import Navbar from '../../components/Navbar/Navbar'
import {Form, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <>    
            <Row className='m-0 log'>
                <Col md={6} sm={6}>
                    <img className='logimg' src='/images/login.jpg'></img>
                </Col>
                <Col md={6} sm={6} className='logform' > 
                    <h1 className='mb-4'>Register</h1>
                    <Form className='loginput' >
                    <Form.Group className="mb-4">
                            <Form.Control type="text" placeholder='Username' />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Control type="email" placeholder='Email' />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Control type="password" placeholder='Password'/>
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Control type="text" placeholder='City'/>
                        </Form.Group>
                    </Form>
                    <Button className='logbtn mb-4'>Register</Button>{' '}
                    <p>Go to login page <span><NavLink to="/login" >Login</NavLink></span></p>
                </Col>
            </Row>
        </>
    )
}

export default Register