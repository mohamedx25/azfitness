import React from 'react'
import './Header.css'
import logo from './images/logo.png'
import { Link } from "gatsby"
import Menu from './Menu'
import SideNav from './SideNav'
import BackDrop from './BackDrop.js'

const linkStyles = {
    textDecoration: 'none',
    color: '#000000',
    padding: '10px 20px',
    alignItems: 'center'
}
class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <div className='header-logo'>
                    <Link to='/'><img  src={logo} alt="logo"/></Link>
                </div>
                <div className='header-nav'> 
                    <ul>
                        <li><Link to='/' style={linkStyles}>Home</Link></li>
                        <li><Link to='/' style={linkStyles}>Nutrition</Link></li>
                        <li><Link to='/' style={linkStyles}>Store</Link></li>
                        <li><Link to='/' style={linkStyles}>Contact</Link></li>
                   </ul>
                </div>
                <div className='menu'>
                    <Menu />
                </div>
                <SideNav />
                <BackDrop />
            </div>
        );
    }
}

export default Header;

