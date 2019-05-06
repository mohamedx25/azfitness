import React from 'react'
import './SlideShow.css'
import SlideShowUI from './SlideShowUI'

// import amine from './images/Amine.jpg'
// import boxing from './images/boxing.jpg'
// import flying from './images/flying.jpg'



/*Component for my slideshow for the skills training section */
class SlideShow extends React.Component{

    render(){
        
        return(
            <div>
                <SlideShowUI />
            </div>
        )
    }
}

export default SlideShow;