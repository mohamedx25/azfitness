import React from "react"
import Video from '../../components/Video'
import Header from '../../components/Header'
// import SlideShow from '../../components/SlideShow'
import '../../components/styles/App.css'
import group from '../../components/images/promo.mp4'



class App extends React.Component{

    render(){
        // let image = images[0];
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

                {/*I will import my slideshow component after the personal training section*/}
                {/* <SlideShow /> */}


                {/*Sports training section*/}
                <div className='skills-training'>
                    <div className='skills'>
                        <div className='slide slide1'>
                            <div className='skills-content'>
                                <h1>Skills Training section</h1>
                                <p>My sports skills training is elite. I guarantee that you will consistently
                                see continued growth and development.  My program will make you become the strongest
                                and fastest you have ever been.  As well as keep you in the best shape</p>
                                <div className='skills-button'>
                                    {/* create a hover action on button */}
                                    <button className='skills-btn'>Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Group fitness section */}
                <div className='group-training'>
                    <h1>Group fitness training</h1>
                    <div className='group-video'>
                        <video src={group} type='video/mp4' />
                    </div>
                </div>
            </div>
        );
    }
}

                  
export default App;
