import React from 'react'
import './Video.css'
import promo from './images/promo.mp4'

const Video = () =>(
    <div>
    <div className='video container'>
        <div className='fullscreen-video-wrap'>
            <video className='background-video' loop autoPlay muted>
                <source src={promo} type='video/mp4'/>
            </video>
        </div>
    </div>
    </div>
)

export default Video;