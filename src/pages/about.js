import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/Header.css'
import '../../components/Footer.css'
import '../../components/styles/About.css'
import banana from '../../components/images/banana.jpg'
import beach from '../../components/images/beach.jpg'
import soccer from '../../components/images/soccer.jpg'
import group from '../../components/images/group.jpg'

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
class About extends React.Component{
    render(){
        return(
            <div>
                <div className='about-header'>    
                    <Header/>
                </div>
                <div className='bio'>
                    <div>
                        <h2>Amine Zaouia</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis neque eget libero placerat mollis. Ut posuere arcu in posuere mollis. Curabitur id tincidunt nulla. Donec id lorem luctus, maximus eros nec, cursus nibh. Aenean fringilla erat tortor, consequat posuere nulla suscipit vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non iaculis tortor. 
                        Sed ut urna pharetra, ultrices elit at, dapibus nulla.
                        </p>
                    </div>
                </div>  
                <div className='journey'>
                    <div className='fit-journey'>
                        <img src={banana} alt='banana'/>
                    </div>
                    <div className='life-story'>
                        <div className='high-school'>
                            <h4>High School</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis neque eget libero placerat mollis. Ut posuere arcu in posuere mollis. Curabitur id tincidunt nulla. Donec id lorem luctus, maximus eros nec, cursus nibh. Aenean fringilla erat tortor, consequat posuere nulla suscipit vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                            Cras non iaculis tortor. Sed ut urna pharetra, ultrices elit at, dapibus nulla.
                            </p>
                        </div>
                        <div className='college'>
                            <h4>College</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis neque eget libero placerat mollis. Ut posuere arcu in posuere mollis. Curabitur id tincidunt nulla. Donec id lorem luctus, maximus eros nec, cursus nibh. Aenean fringilla erat tortor, consequat posuere nulla suscipit vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Cras non iaculis tortor. Sed ut urna pharetra, ultrices elit at, dapibus nulla.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='services'>
                        <h1>A2Z Fitness Services</h1>
                        <p>You're in good hands if you train with me!</p>
                    <div className='service-cards'>
                        <div className='pt-card'>
                            <h2>Personal Trainings</h2>
                            <img src={beach} alt='personal trainer'/>
                            <p>My personal training program will help YOU reach your 
                                dream body. I guarantee it.</p>
                        </div>
                        <div className='skills-card'>
                            <h2>Sports skills training</h2>
                            <img src={soccer} alt='skills'/>
                            <p>I know my program will work because I was an elite athlete
                                and know what it will take</p>
                        </div>
                        <div className='gt-card'>
                            <h2>Group fitness training</h2>
                            <img src={group} alt='group'/>
                            <p>My group training classes are sure to get your heart rate going</p>
                        </div>
                    </div>
                </div>

                <div className='about-join'>
                    <h3>Contact me for a  one on one consultation</h3>
                    <button style={buttonStyles}>Contact Me</button> 
                </div>
                <div className='about-footer'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default About;