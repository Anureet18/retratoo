import React, { useState } from 'react'
import { Row, Col, Container } from "react-bootstrap"
import "../Log/Log.css"
import Navbar from '../../components/Navbar/Navbar'
import { Form, Button } from 'react-bootstrap';
import { NavLink,useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({ username: "", email: "", password: "", city: "" });
    
    const handleInput=(e)=>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,[name]:value
        })
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(user)
        //connecting to backend
        try {
           
           const response = await fetch(`http://localhost:5000/api/auth/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user)
        });
         if(response.ok){
            const data = await response.json();
            console.log("res from server",data)
            setUser({username: "", email: "", password: "", city: ""});
            navigate("/login");
         }
         console.log(response);
        } catch (error) {
            console.log("register",error)
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
                    <h1 className='mb-4'>Register</h1>

                    <Form className='loginput' onSubmit={handleSubmit}>
                        <Form.Group className="mb-4">
                            <Form.Control type="text" name='username' placeholder='Username'
                                id='username' autoComplete='off' value={user.username} onChange={handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Control type="email" name='email' placeholder='Email'
                                id='email' autoComplete='off' value={user.email} onChange={handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Control type="password" name='password' placeholder='Password'
                                id='password' autoComplete='off' value={user.password} onChange={handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Control type="text" name='city' placeholder='City'
                                id='city' autoComplete='off' value={user.city} onChange={handleInput} />
                        </Form.Group>
                    
                    <Button className='logbtn mb-4' type='submit'>Register</Button>{' '}
                    <p>Go to login page <span><NavLink to="/login" >Login</NavLink></span></p>
                    </Form>
                </Col>
            </Row>
            </div>
        </>
    )
}

export default Register