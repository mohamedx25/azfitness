import React from 'react'
import './SlideShow.css'
import amine from './images/Amine.jpg'
import boxing from './images/boxing.jpg'
import flying from './images/flying.jpg'

// array to hold all the images for my slideshow
const images = [
    {
        title: 'boxing',
        src: boxing
    },
    {
        title: 'amine',
        src: amine
    },
    {
        title: 'flying',
        src: flying
    }
]
/*Component for my slideshow for the skills training section */
class SlideShow extends React.Component{
    //variable 
    let count;
    let show = images; //variable that holds all of the images
    // will reset the images for the sports container
    reset = () =>{
        for(let i = i < show.length; i++){
            show[i].style.display = none;
        }
    }
    // will start the slideshow
    startSlide = () =>{
       
    }
    // function to slide left
    leftarrowClickHandler = () =>{
        console.log('click left');
        
    }
    // function to slide right
    rightarrowClickHandler = () =>{
        console.log('click right');
    }
    
    render(){
        return(
            <div className='skills-training'>
                    <div 
                        className='arrow-left arrow'
                        onClick={this.leftarrowClickHandler}>
                    </div> 
                    
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
                        
                    </div>
                    <div 
                        className='arrow-right arrow'
                        onClick={this.rightarrowClickHandler}>
                    </div>
                </div>
        )
    }
}

export default SlideShow;