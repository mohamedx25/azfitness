import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Cards from '../../components/Cards'
import '../../components/Header.css'
import '../../components/Footer.css'
import '../../components/styles/About.css'
import Bio from '../../components/Bio/Bio.js'
// import { Wave } from 'react-animated-text'
// import beach from '../../components/images/beach.jpg'
// import soccer from '../../components/images/soccer.jpg'
// import group from '../../components/images/group.jpg'
// import hsSoccer from '../../components/images/amine-soccer.jpg'
// import college from '../../components/images/college.jpg'   

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
                <Header/>
                <div className='bio'>
                    <div className='bio-info'>
                        {/* <Wave 
                            text='Amine Zaouia' 
                            effect='jump'
                            effectDirection='up'
                            speed='10'
                        />  */}
                        <h2>Amine Zaouia</h2>
                        <p>
                            Here you would put your mission statement for your business.<br /> 
                            What you are about and goal of business. 
                        </p>
                    </div>
                </div>  
                <div className='journey'>
                    <div className='fit-journey'></div>
                    <div className='life-story'>
                        {/* <Bio /> */}
                        <div className='high-school'>
                            <h4>High School</h4>
                            <p>This section I believe I wanted to use to describe your high school experience.
                            </p>
                        </div>
                        <div className='college'>
                            <h4>College</h4>
                            <p> 
                                This section I felt like would be used to briefly describe your college experience.
                            </p>
                        </div>
                    </div>
                </div>

                <Cards />
                <div className='about-join'>
                    <div className='join'>
                        <h3>Contact me for a  one on one consultation</h3>
                        <button style={buttonStyles} className='join-btn'>Contact Me</button> 
                    </div>
                </div>
                <div className='about-footer'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default About;