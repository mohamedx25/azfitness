import React from 'react'
import './Video.css'
import promo from './images/HIIT-video.mp4'

const Video = () =>(
    <div>
    <div className='video'>
        <div className='fullscreen-video-wrap'>
            <video className='background-video' loop autoPlay muted>
                <source src={promo} type='video/mp4'/>
            </video>
        </div>
    </div>
    </div>
)

export default Video;