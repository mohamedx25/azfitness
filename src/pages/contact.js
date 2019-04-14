import React  from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/Header.css'
import '../../components/Footer.css'
import '../../components/styles/Contact.css'

const Contact = (props) =>(
    <div>
        <Header />
        <div className='contact'>
            <h1>Contact Me</h1>
        </div>
        <section>
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
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                    </ul>
                </form>
            </div>
            
        </section>
        <Footer />
    </div>
)

export default Contact;