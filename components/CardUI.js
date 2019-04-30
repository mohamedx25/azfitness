import React from 'react'
// import beach from '../images/beach.jpg'
// import soccer from '../images/soccer.jpg'
// import group from './images/group.jpg'
import './cards-style.css'

const CardUI = (props) =>(
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt='group' className='card-img-top'/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p>
                    {props.about} 
                </p>
                <a href='#' className='btn btn-outline-success'>Learn More </a>
            </div>
        </div>
    
)

export default CardUI