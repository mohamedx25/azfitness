import React from 'react'
import Menu from './Menu'
import { Link } from 'gatsby'
import './SideNav.css'


const sideBar = {
    textDecoration: 'none',
    color: 'purple',
    padding: '10px 20px',
    alignItems: 'center'
}

const SideNav = props =>(
    <nav className='side-nav'>
        <div>
            <Menu click={props.navClickHandler}/>
        </div> 
        <div className='bar-nav'>
            <ul>
                <li><Link to='/' style={sideBar}>Home</Link></li>
                <li><Link to='/' style={sideBar}>Nutrition</Link></li>
                <li><Link to='/' style={sideBar}>Store</Link></li>
                <li><Link to='/' style={sideBar}>Contact</Link></li>
            </ul>
        </div>
    </nav>
);

export default SideNav;