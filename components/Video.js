import React from 'react'
import './Video.css'
import promo from './images/HIIT-video.mp4'

const Video = () =>(
    <div className='video'>
        <div className='fullscreen-video-wrap'>
            <video className='background-video'>
                <source src={promo} type='video/mp4' loop autoPlay muted></source>
            </video>
        </div>
    </div>
)

export default Video;