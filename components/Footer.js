import React from 'react'
import './Footer.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(fab);

class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='social'>
                    <ul>
                        <li><a href='/'>
                            <FontAwesomeIcon className='insta' icon={['fab', 'instagram']} size='2x'
                                style={{
                                    color: '#fff'
                                }}
                            />
                        </a></li>
                        <li><a href='/'>
                            <FontAwesomeIcon className='twitter' icon={['fab', 'twitter']} size='2x'
                                style={{
                                    color: '#fff'
                                }}
                            />
                        </a></li>
                        <li><a href='/'>
                            <FontAwesomeIcon className='youtube' icon={['fab', 'youtube']} size='2x'
                                style={{
                                    color: '#fff'
                                }}
                                
                            />    
                        </a></li>
                        <li><a href='/'>
                            <FontAwesomeIcon className='linkedin' icon={['fab', 'linkedin']} size='2x'
                                activeClassName='active'
                                style={{
                                    color: '#fff'
                                }}
                            />    
                        </a></li>
                    </ul>
                </div>
                <div className='company'>
                    <h5>A2Z Fitness LLC {'\u00A9'}</h5>
                </div>
             </div>
        )
    }
}

export default Footer;