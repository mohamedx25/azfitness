import React  from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
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

const buttonStyles = {
    fontSize: "13px",
    textAlign: "center",
    color: "#fff",
    outline: "none",
    padding: "12px 60px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "#DB5461",
    borderRadius: "6px",
    letterSpacing: "1.5px",
}

const Contact = (props) =>(
    <div>
        <Header />
        <div className='contact'>
            <h1>Contact Me</h1>
        </div>
        <div>
        <section className='form-section'>
       
            <div className='contact-form'>
                <form method='post' action=''>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="name" id="f_name" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name="name" id="l_name" />
                    </div>
                    <div>
                        <label>Cell Phone</label>
                        <input type="text" name="phone" id="cell" />
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Submit" style={buttonStyles}/>
                    </div>
                </form>
            </div>
        </section>
        <section className='info-section'>
            <div className='email-info'>
                <FontAwesomeIcon icon={faEnvelope} size='3x'/>
                <h3>Email</h3>
                <button>a2zfitness@gmail.com</button>
            </div>
            <div className='phone-info'>
                <FontAwesomeIcon icon={faPhone} size='3x'/>
                <h3>Phone Number</h3>
                <span>123-939-2020</span>
            </div>
            <div className='address-info'>
                <FontAwesomeIcon icon={faHome} size='3x'/>
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