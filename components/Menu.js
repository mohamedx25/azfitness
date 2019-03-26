import React from "react";
import './Menu.css'

const Menu = () =>{
    return(
        <div className='hamburger'>
            <button className='toggle-button'>
                <div className='toggle-button_line'></div>
                <div className='toggle-button_line'></div>
                <div className='toggle-button_line'></div>
            </button>
        </div>
    )
}

export default  Menu;