import React, { useEffect, useState } from 'react'
import './Homepage.css'
import { Row, Col, Button, Card, Form, Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar'
// import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight, HiArrowNarrowRight } from "react-icons/hi";
import Footer from '../../components/Footer/Footer';

const Homepage = () => {

    return (
        <>
            <Navbar />
            <div className='homepage'>
                <div className='home d-flex flex-column justify-content-end align-items-center'>
                    <h1 className='title'>RETRATOO</h1>
                    {/* <h6>Where art lives within</h6> */}
                </div>
                {/* <div className='social-icon'>
                        <div className='icons'><FaInstagram /></div>
                        <div className='icons'><FaWhatsapp /></div>
                        <div className='icons'><FaFacebookF /></div>
                    </div> */}

                <div className='artwork'>
                    <Container>
                        <div className='buyartwork'>
                            <h1>Buy Artwork</h1>
                            <Button className='morebtn'>See more</Button>{' '}
                        </div>
                        <Row className='m-0 buy'>
                            <Col md={4} sm={4}>
                                <Card className="buycard" style={{ width: '20rem' }}>
                                    <Card.Img style={{ height: '24rem' }} variant="top" src="/images/buy1.jpeg" />
                                    <Card.Body>
                                        <div className='buytitle'>
                                            <Card.Title>Ek Onkar</Card.Title>
                                            <Button className='detailbtn' variant="primary">See Details</Button></div>
                                        <Card.Text>
                                            Medium : Oil painting <br />
                                            Size : 30 x 40 inch
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} sm={4}>
                                <Card className="buycard" style={{ width: '20rem' }}>
                                    <Card.Img style={{ height: '24rem' }} variant="top" src="/images/buy2.jpeg" />
                                    <Card.Body>
                                        <div className='buytitle'>
                                            <Card.Title>Dhan Guru Nanak </Card.Title>
                                            <Button className='detailbtn' variant="primary">See Details</Button>
                                        </div>
                                        <Card.Text>
                                            Medium : Oil painting <br />
                                            Size : 30 x 40 inch
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} sm={4}>
                                <Card className="buycard" style={{ width: '20rem' }}>
                                    <Card.Img style={{ height: '24rem' }} variant="top" src="/images/buy3.jpeg" />
                                    <Card.Body>
                                        <div className='buytitle'>
                                            <Card.Title>Mess</Card.Title>
                                            <Button className='detailbtn' variant="primary">See Details</Button>
                                        </div>
                                        <Card.Text>
                                            Medium : Oil painting <br />
                                            Size : 30 x 40 inch
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='custom container'>
                    <Row>
                        <Col lg={6} md={6} sm={6} className='booking d-flex justify-content-between align-items-center'>
                            <div className='bookicon'><HiChevronLeft /></div>
                            <img src='/images/book.jpg'></img>
                            <div className='bookicon'><HiChevronRight /></div>
                        </Col>
                        <Col lg={6} md={6} sm={6} className='d-flex flex-column justify-content-center align-items-center'>
                            <p>Book your private commission slot</p>
                            <Button className='orderbtn'>Order Now</Button>{' '}
                        </Col>
                    </Row> </div>
                <div className='contact'>
                    <Container>
                        <Row>
                            <Col md={6} sm={6}>
                                <h1>Contact Us</h1>
                                <Form className='contactform mb-4'>
                                    <Form.Group className="mb-3" >
                                        <Form.Label className="msglabel mb-3">Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label className="msglabel mb-3">Email address</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="msglabel mb-3">Message</Form.Label>
                                        <Form.Control as="textarea" rows={5} />
                                    </Form.Group>
                                </Form>
                                <Button className='msgbtn'>Send Message</Button>{' '}
                            </Col>
                            <Col md={6} sm={6} className='d-flex justify-content-end align-items-center'>
                                <img className='contactimg' src='/images/logo.png'></img>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="scroll-container">
                    <div className="right-scroll-text">RETRATOO RETRATOO RETRATOO RETRATOO RETRATOO RETRATOO RETRATOO RETRATOO</div><br/>
                    <div className='left-scroll-text'>Where art lives within  Where art lives within </div>
                </div>
                <div className='email'>
                    <h2>Stay up to date</h2>
                    <p>Sign up and receive the latest on featues and releases</p>
                    {/* <div className='enter'>
                    <p>Enter your e-mail address</p>
                    
                </div> */}
                    <div className='enter'>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control className='mb-0' type="email" placeholder="name@example.com" />
                            </Form.Group>
                        </Form>
                        <Button className='enterbtn' ><HiArrowNarrowRight /></Button>
                    </div>
                    <p className='agree'>By subscribing you agree to our terms Privacy Policy and Provide constent
                        to receive updates from us</p>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Homepage
