import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import "./Login.css"
import {Form, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Row className='m-0 log'>
                <Col md={6} sm={6}>
                    <img className='logimg' src='/images/login.jpg'></img>
                </Col>
                <Col md={6} sm={6} className='logform' > 
                    <h1 className='mb-4'>Login</h1>
                    <Form className='loginput' >
                        <Form.Group className="mb-4">
                            <Form.Control type="email" placeholder='Email' />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Control type="password" placeholder='Password'/>
                        </Form.Group>
                    </Form>
                    <Button className='logbtn mb-4'>Login</Button>{' '}
                    <p>Don't have an account? <span><NavLink to="/register" >Register</NavLink></span></p>
                </Col>
            </Row>
        </>
    )
}

export default Login
