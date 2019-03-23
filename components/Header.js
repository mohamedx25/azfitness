import React from 'react'
import './Header.css'
import logo from './images/logo.png'

class Header extends React.Component{
    render(){
        return(
            <div>
                <img  src={logo} alt="logo"/>
                
            </div>
        );
    }
}

export default Header;

