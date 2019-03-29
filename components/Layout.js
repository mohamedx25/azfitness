import React from 'react'
//import layout from './Layout.css'
import Header from './Header.js'

export default ({ children }) =>{
    // render(){
        return(
            <div>
                <Header />
                {children}
            </div>
        );
    // }
}

// export default Layout;