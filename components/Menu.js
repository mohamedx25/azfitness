import React from "react";
import './Menu.css'

const Menu = props =>{
    return(
        <div className='hamburger' onClick={props.navClickHandler}>
            <button className='toggle-button'>
                <div className='toggle-button_line'></div>
                <div className='toggle-button_line'></div>
                <div className='toggle-button_line'></div>
            </button>
        </div>
    )
}

export default  Menu;