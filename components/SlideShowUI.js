import React from 'react'
import './styles/App.css'


const SlideShowUI = (props) =>(
    <div>
        <div className='arrow-left arrow'></div> 
        
        <div className='slider'>
            <div className='slide'>
                <div className='slide-content'>

                </div>
            </div>
        </div>
        
        <div className='arrow-right arrow'></div>
    </div>
)

export default SlideShowUI