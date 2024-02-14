import React, { useEffect, useState } from 'react'
import './Homepage.css'
import { Row, Col, Button, Card, Form, Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar'
import { HiChevronLeft, HiChevronRight, HiArrowNarrowRight } from "react-icons/hi";
import Footer from '../../components/Footer/Footer';
import { useAuth } from '../../store/auth';

const Homepage = () => {

    const { loggedUser } = useAuth();

    const [user, setUser] = useState({
        username: "",
        email: "",
        usermsg: ""
    })
    const [userInfo, setUserInfo] = useState(true)


    if (userInfo && loggedUser) {
        setUser({
            username: loggedUser.username,
            email: loggedUser.email,
            usermsg: user.usermsg,
        });
        setUserInfo(false);
    }

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
        //connecting to backend
        try {

            const response = await fetch(`http://localhost:5000/api/form/contact`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user)
                });
            if (response.ok) {
                const data = await response.json();
                console.log("res from server", data)
                setUser({
                    username: "",
                    email: "",
                    usermsg: ""
                });
                console.log(response);
            } else {
                // Handling errors here
                const errorData = await response.json();
                console.error("validation error:", errorData.msg);
            }

        } catch (error) {
            console.log("contact", error);
        }
    };
    // const word = 'Gallery ';
    // const repetitionCount = 100;

    return (
        <>
            <Navbar />
            <div className='homepage'>
                <div className='home d-flex flex-column justify-content-center align-items-center'>
                    <h1 data-text="Retratoo">Retratoo</h1>
                    {/* <h6>Where art lives within</h6> */}
                </div>
                {/* <div className='social-icon'>
                        <div className='icons'><FaInstagram /></div>
                        <div className='icons'><FaWhatsapp /></div>
                        <div className='icons'><FaFacebookF /></div>
                    </div> */}

                <div className='artwork'>
                        <div className='buyartwork'>
                            <h1>Buy Artwork</h1>
                            <Button className='morebtn'>See more</Button>{' '}
                        </div>
                        <Row className='m-0 buy'>
                            <Col md={4} sm={4}>
                                <Card className="buycard" style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '24rem' }} variant="top" src="/images/buy1.jpeg" />
                                    <Card.Body>
                                        <div className='buytitle'>
                                            <Card.Title>Ek Onkar</Card.Title>
                                            <Button className='detailbtn' variant="dark">See Details</Button></div>
                                        <Card.Text>
                                            Medium : Oil painting <br />
                                            Size : 30 x 40 inch
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} sm={4}>
                                <Card className="buycard" style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '24rem' }} variant="top" src="/images/buy2.jpeg" />
                                    <Card.Body>
                                        <div className='buytitle'>
                                            <Card.Title>Dhan Guru Nanak </Card.Title>
                                            <Button className='detailbtn' variant="dark">See Details</Button>
                                        </div>
                                        <Card.Text>
                                            Medium : Oil painting <br />
                                            Size : 30 x 40 inch
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} sm={4}>
                                <Card className="buycard" style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '24rem' }} variant="top" src="/images/buy3.jpeg" />
                                    <Card.Body>
                                        <div className='buytitle'>
                                            <Card.Title>Mess</Card.Title>
                                            <Button className='detailbtn' variant="dark">See Details</Button>
                                        </div>
                                        <Card.Text>
                                            Medium : Oil painting <br />
                                            Size : 30 x 40 inch
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                </div>

                <div className="marquee-container">
                    <div className="marquee-content">
                       Gallery Gallery Gallery Gallery Gallery
                    </div>
                    <div className="marquee-content">
                       Retratoo where art lives within Retratoo where art lives within 
                    </div>
                </div>

                <div className='gallery'>
                    <div className='box'>
                        <span style={{ '--i': `${1}` }}><img src='/images/login.jpg' alt='' /></span>
                        <span style={{ '--i': `${2}` }}><img src='/images/contact.jpg' alt='' /></span>
                        <span style={{ '--i': `${3}` }}><img src='/images/buy1.jpeg' alt='' /></span>
                        <span style={{ '--i': `${4}` }}><img src='/images/buy2.jpeg' alt='' /></span>
                        <span style={{ '--i': `${5}` }}><img src='/images/buy3.jpeg' alt='' /></span>
                        <span style={{ '--i': `${6}` }}><img src='/images/contact.jpg' alt='' /></span>
                        <span style={{ '--i': `${7}` }}><img src='/images/buy1.jpeg' alt='' /></span>
                        <span style={{ '--i': `${8}` }}><img src='/images/buy2.jpeg' alt='' /></span>
                        <span style={{ '--i': `${9}` }}><img src='/images/buy3.jpeg' alt='' /></span>
                    </div>
                    <div className='gallerybtns'>
                        <button className='prev gallerybtn'>AAAA</button>
                        <button className='next gallerybtn'>BBBB</button>
                    </div>
                </div>


                <div className='custom'>
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
                                <Form className='contactform mb-4' onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label className="msglabel mb-3">Name</Form.Label>
                                        <Form.Control type="text" name='username' id='username'
                                            value={user.username} onChange={handleInput} required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label className="msglabel mb-3">Email address</Form.Label>
                                        <Form.Control type="email" name='email' id='email'
                                            value={user.email} onChange={handleInput} required />
                                    </Form.Group>
                                    <Form.Group className="mb-5">
                                        <Form.Label className="msglabel">Message</Form.Label>
                                        <Form.Control as="textarea" rows={5} type="text" name='usermsg' id='usermsg'
                                            value={user.usermsg} onChange={handleInput} required />
                                    </Form.Group>
                                    <Button className='msgbtn' type='submit'>Send Message</Button>{' '}
                                </Form>
                            </Col>
                            <Col md={6} sm={6} className='d-flex justify-content-end align-items-center'>
                                <img className='contactimg' src='/images/logo.png'></img>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* <div className="scroll-container">
                    <div className="right-scroll-text">RETRATOO RETRATOO RETRATOO RETRATOO RETRATOO RETRATOO RETRATOO RETRATOO</div><br />
                    <div className='left-scroll-text'>Where art lives within  Where art lives within </div>
                </div> */}
                <Container> 
                    <div className='email'>
                    <h2>Stay up to date</h2>
                    <p>Sign up and receive the latest on featues and releases</p>
                    <div className='enter'>
                        <Form >
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control className='mb-0' type="email" placeholder="name@example.com" />
                            </Form.Group>
                        </Form>
                        <Button className='enterbtn' type='submit' ><HiArrowNarrowRight /></Button>
                    </div>                  
                    <p className='agree'>By subscribing you agree to our terms Privacy Policy and Provide constent
                        to receive updates from us</p>
                </div>
                </Container>
               
                <Footer />
            </div>
        </>
    )
}

export default Homepage
