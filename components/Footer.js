import React from 'react'
import './Footer.css'
import { Link } from "gatsby"
import './images/insta.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='social'>
                    <li><Link to='/' className='fa fa-instagram'></Link></li>
                    <li><Link to='/'><FontAwesomeIcon icon="igloo" /></Link></li>
                    <li><Link to='/'></Link></li>
                </div>
             </div>
        )
    }
}

 


export default Footer;