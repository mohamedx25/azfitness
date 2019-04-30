import React from 'react'
import CardUI from './CardUI'
import group from './images/group.jpg'
import beach from './images/beach.jpg'
import soccer from './images/soccer.jpg'

class Cards extends React.Component{
    render(){
        return(
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <CardUI imgsrc={group}
                            title='Group Training'
                            about='I lead group training classes at Signature Fitness and Retro Fitness
                            If you are looking to join a fun and exciting class come to my classes.'/>
                    </div>
                    <div className='col-md-4'>
                        <CardUI imgsrc={beach}
                            title='Personal Training'
                            about='My personal training program is top of the line
                            if you are looking for consistent results and a healthy guilt 
                            free lifestyle. I will show you.'/>
                    </div>
                    <div className='col-md-4'>
                        <CardUI imgsrc={soccer}
                        title='Sports Training'
                        about='I also include sports specific training for soccer.  My program is guaranteed
                        to improve your entire game.  I will improve your skill, strength and conditioning.'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards