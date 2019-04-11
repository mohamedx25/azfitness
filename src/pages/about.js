import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/Header.css'
import '../../components/Footer.css'
import '../../components/styles/About.css'
import banana from '../../components/images/banana.jpg'

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
                <div className='services.'>
                    <h1>A2Z Fitness Services</h1>
                    <p>You're in good hands if you train with me!</p>
                    <div className='service-cards'>
                        <div className='pt-card'>
                            <h2>Personal Trainings</h2>
                        </div>
                        <div className='skills-card'>
                            <h2>Sports skills training</h2>
                        </div>
                        <div className='gt-card'>
                            <h2>Group fitness training</h2>
                        </div>
                    </div>
                </div>
                <div className='about-join'>
                    <h3>Contact me for a consultation</h3>
                    <button />
                </div>
                <div className='about-footer'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default About;