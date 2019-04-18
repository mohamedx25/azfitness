import React from 'react'
import './Header.css'
import logo from './images/logo.png'
import { Link } from "gatsby"
import Menu from './Menu'
import SideNav from './SideNav'
import BackDrop from './BackDrop.js'


const linkStyles = {
    textDecoration: 'none',
    color: '#FF0000',
    padding: '20px 40px',
    alignItems: 'center'
}
class Header extends React.Component{
    state = {
        sideNavOpen: false
    };

    navMenuClickHandler = () =>{
        this.setState((prevState) => {
            return {sideNavOpen: !prevState.sideNavOpen}
        });  
    };

    backdropClickHandler = () =>{
        this.setState({sideNavOpen: false});
    };
    
    render(){
        let sideNav;
        let backdrop;
        if(this.state.sideNavOpen){
            sideNav = <SideNav />;
            backdrop = <BackDrop click={this.backdropClickHandler}/>;
        }
        return(
            <div className='header'>
                <div className='header-logo'>
                    <Link to='/'><img  src={logo} alt="logo"/></Link>
                </div>
                <div className='header-nav'> 
                    <ul>
                        <li><Link to='/index' style={linkStyles}>Home</Link></li>
                        <li><Link to='/about/' style={linkStyles}>About</Link></li>
                        {/* <li><Link to='/' style={linkStyles}>Nutrition</Link></li> */}
                        {/* <li><Link to='/' style={linkStyles}>Store</Link></li> */}
                        <li><Link to='/contact/' style={linkStyles}>Contact</Link></li>
                   </ul>
                </div>
                <div className='menu'>
                    <Menu navClickHandler={()=>this.navMenuClickHandler()}/>
                    {sideNav}
                </div>
                {backdrop}
                
            </div>
        );
    }
}

export default Header;

