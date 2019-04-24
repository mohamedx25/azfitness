import React  from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import '../../components/Header.css'
import '../../components/Footer.css'
import '../../components/styles/Contact.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'

library.add(fab);

// const buttonStyles = {
//     fontSize: "13px",
//     textAlign: "center",
//     color: "#fff",
//     outline: "none",
//     padding: "12px 60px",
//     boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
//     backgroundColor: "#5ff442",
//     borderRadius: "6px",
//     letterSpacing: "1.5px",
// }

const Contact = (props) =>(
    <div>
        <Header />
        <div className='contact'>
            <h1>Contact Me</h1>
        </div>
        <div className='info-container'>
            <section className='form-section'>
                <div className='contact-form'>
                    <Form name='contact' 
                        action='/success'
                        method='POST' 
                        data-netlify='true'
                        data-netlify-honeypot='bot-field'>
                        <Form.Control type='hidden' name='bot-field' />
                        <Form.Group controlId='formBasicName'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                type='text' 
                                name='f_name'
                                placeholder='Enter First Name'/>
                        </Form.Group>
                        <Form.Group controlId='formBasicName'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type='text' 
                                name='l_name'
                                placeholder='Enter Last Name'/>
                        </Form.Group>
                        <Form.Group controlId='formGroupEmail'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type='text' 
                                name='email'
                                placeholder='Enter Email'/>
                        </Form.Group>
                        <Form.Group controlId='formGroupNumber'>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                                type='number' 
                                name='number'
                                placeholder='Enter Phone number'/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea"
                                name='message' 
                                rows="6" 
                                placeholder='Send me any questions or comments'
                            />
                        </Form.Group>
                        <Button variant='success' 
                                size='lg' 
                                active
                                type='submit'
                                >
                            Submit
                        </Button>
                    </Form>
                    {/* <form 
                        method='POST'
                        name='contact'
                        action='/success/'
                        data-netlify='true'
                        data-netlify-honeypot='bot-field'>
                        <input type='hidden' name='bot-field' />
                        Full Name <input type='text'
                            name='name'
                            placeholder='your name'/>
                        <button type='submit'>Submit</button>
                    </form> */}
                </div>
            </section>
            <section className='info-section'>
                <div className='email-info'>
                    <FontAwesomeIcon icon={faEnvelope} 
                        size='3x'
                        className='email-icon'
                    />
                    <h3>Email</h3>
                    <button>a2zfitness@gmail.com</button>
                </div>
                <div className='phone-info'>
                    <FontAwesomeIcon 
                        icon={faPhone} 
                        size='3x'
                        className='phone-icon'/>
                    <h3>Phone Number</h3>
                    <span>123-939-2020</span>
                </div>
                <div className='address-info'>
                    <FontAwesomeIcon 
                        icon={faHome} 
                        size='3x'
                        className='home-icon'/>
                    <h3>Gym Location</h3>
                    <span>1234 Somewhere Road #5432<br />
                        Kearny, NJ 00000<br />
                        United States of America</span>
                </div>
            </section>
        </div>
        <Footer />
    </div>
)

export default Contact;