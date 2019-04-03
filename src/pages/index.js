import React from "react"
// import Layout from '../../components/Layout'
import Video from '../../components/Video'
import Header from '../../components/Header'
import '../../components/styles/App.css'

class App extends React.Component{
    let sliderImages;
    render(){
        return( 
            <div>
                <Header />
                <Video />
                 {/*personal training section*/}
                <div className='container'>
                    <div className='pt-training'>
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
                    </div>
                </div>
                {/*Sports training section*/}
                <div className='skills-training'>
                    <div className='arrow-left arrow'></div>
                    <div className='slider'>
                        <div className='slide slide1'>
                            <div className='slide-content'>
                                <h1>Skills Training section</h1>
                                <p>My sports skills training is elite. I guarantee that you will consistently
                                see continued growth and development.  My program will make you become the strongest
                                and fastest you have ever been.  As well as keep you in the best shape</p>
                                <div className='skills-button'>
                                    <button className='skills-btn'>Join Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='slide slide2'>
                            <div className='slide-content'>
                                <h1>Skills Training section</h1>
                                <p>My sports skills training is elite. I guarantee that you will consistently
                                see continued growth and development.  My program will make you become the strongest
                                and fastest you have ever been.  As well as keep you in the best shape</p>
                                <div className='skills-button'>
                                    <button className='skills-btn'>Join Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='slide slide3'>
                            <div className='slide-content'>
                                <h1>Skills Training section</h1>
                                <p>My sports skills training is elite. I guarantee that you will consistently
                                see continued growth and development.  My program will make you become the strongest
                                and fastest you have ever been.  As well as keep you in the best shape</p>
                                <div className='skills-button'>
                                    <button className='skills-btn'>Join Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='arrow-right arrow'></div>
                    </div>
                </div>
            </div>
        );
    }
}

                  
export default App;
