import React, { useState } from 'react'
import { Row, Col, Container } from "react-bootstrap"
import "./Log.css"
import { Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';

const Login = () => {

    const navigate = useNavigate()
    const { storeTokenInLS } = useAuth();
    const [user, setUser] = useState({ username: "", password: "" })

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                //store the token in LS
                //localStorage.setItem("token",data.token)         
                storeTokenInLS(data.token)
                setUser({ email: "", password: "" });
                navigate("/");
            }
            console.log(response)
            //  
            //  console.log("login form",data);
        } catch (error) {
            console.log("register", error)
        }
    }

    return (
            <>
            <div className='log'>
                <Row className='m-0'>
                    <Col md={6} sm={6}>
                        <img className='logimg' src='/images/login.jpg'></img>
                    </Col>
                    <Col md={6} sm={6} className='logform' >
                        <h1 className='mb-4'>Login</h1>
                        <Form className='loginput' onSubmit={handleSubmit}>
                            <Form.Group className="mb-4">
                                <Form.Control type="email" name='email' placeholder='Email'
                                    id='email' value={user.email} onChange={handleInput} autoComplete='off' />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="password" name='password' placeholder='Password'
                                    id='password' value={user.password} onChange={handleInput} autoComplete='off' />
                            </Form.Group>

                            <Button className='logbtn mb-4' type='submit'>Login</Button>{' '}
                        </Form>
                        <p>Don't have an account? <span><NavLink to="/register" >Register</NavLink></span></p>
                    </Col>
                </Row>             
                </div>
            </>       
    )
}

export default Login
