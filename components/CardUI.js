import React from 'react'
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
                <a href='#' className='btn btn-outline-success' alt='Learn more'>Learn More </a>
            </div>
        </div>
    
)

export default CardUI