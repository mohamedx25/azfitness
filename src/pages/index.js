import React from "react"
import Video from '../../components/Video'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Carousel } from 'react-bootstrap'
// import SlideShow from '../../components/SlideShow'
import '../../components/styles/App.css'
import group from '../../components/images/promo.mp4'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import soccer from '../../components/images/soccer.jpg'
// import boxing from '../../components/images/boxing.jpg'
import beach from '../../components/images/beach.jpg'

class App extends React.Component{
    // testing dep
    render(){
        // let image = images[0];
        return( 
            <div>
                <Header />
                <Video />
                 {/*personal training section*/}
                {/* <div className='pt-training'>
                    <div className='pt-about'>
                        <div className='pt-info'>
                            <h1>Personal Training</h1>
                            <p>My personal training is top of the line.  I do not 
                                guarantee quick easy results. I guarantee a plan that will 
                                give you the ability to have sustained success for the future.
                                I guarantee you will love the way you look and enjoy your fitness journey
                                training how you want and enjoying all the food you like.
                            </p>
                            <div className='pt-button'>
                                <button className='pt-btn'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                <div className='container-fluid img-fluid'>
                    <div className='col-lg pt-info'>
                        <h3>Personal Training</h3>
                        <p>My personal training program is the best around.  I do not guarantee
                        quick unrealistic results.  I guarantee a system that will allow you to 
                        reach your fitness goals while still being able to enjoy the foods you like.
                        </p>
                        <button type='button' className='btn btn-primary btn-lg'>Learn More</button>
                    </div>
                </div>

                {/* fitness quote */}
                <div className='fitness-quote'>
                    <div className='left-side'></div>
                    <div className='middle'>
                        <h3>
                        "Discipline is choosing between what you want now and what you want most"
                        </h3>
                    </div>
                    <div className='right-side'></div>
                </div>

                {/*Sports training section*/}
                {/* <div className='skills-training'>
                    <div className='skills'>
                        <div className='slide slide1'>
                            <div className='skills-content'>
                                <h1>Skills Training section</h1>
                                <p>My sports skills training is elite. I guarantee that you will consistently
                                see continued growth and development.  My program will make you become the strongest
                                and fastest you have ever been.  As well as keep you in the best shape</p>
                                <div className='skills-button'>
                                    <button className='skills-btn'>Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className='sports-training'> */}
                <Carousel>
                    <Carousel.Item>
                        <img 
                            className='d-block w-100'
                            src={soccer}
                            alt='First slide'
                            
                        />
                        <Carousel.Caption>
                            <h3>Sports Training</h3>
                            <p>My training will help you reach your ultimate goals on and off the 
                                pitch.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className='d-block w-100'
                            src={beach}
                            alt='Third slide'
                            
                        />
                        <Carousel.Caption>
                            <h3>Sports Training</h3>
                            <p>Sports training will make you feel your best and look your best.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* </div> */}

                {/*I will import my slideshow component after the personal training section*/}
                {/* <SlideShow /> */}

                {/* Group fitness section */}
                <div className='group-training'>
                    <div className='group-info'>
                        <h1>Group fitness training</h1>
                        <p>I also lead Group fitness classes at Signature Fitness, Belleville NJ and 
                        Retro Fitness at wallington nj.  My group training is for any level.  My classes 
                        are HIIT classes and whip you right into shape.  Come join my class and get to work!
                        </p>
                        <button className='group-btn'>Learn More</button>
                    </div>
                    <div className='group-video'>
                        <video src={group} type='video/mp4' controls='controls' width='750' height='500'/>
                    </div>
                   
                </div> 
                <Footer />
            </div>
        );
    }
}

                  
export default App;
