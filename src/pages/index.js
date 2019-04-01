import React from "react"
// import Layout from '../../components/Layout'
import Video from '../../components/Video'
import Header from '../../components/Header'
import '../../components/styles/App.css'

class App extends React.Component{

    render(){
        return( 
            <div>
                <Header />
                <Video />
                
                <div className='container'>
                    <div className='pt-training'>
                        <div className='pt-about'>
                            <div className='pt-info'>
                                <h1>Personal Training</h1>
                                <p>My personal training is top of the line.  I do not 
                                guarantee quick easy results. I guarantee a plan that will 
                                give you the ability to have sustained success for the future.
                                I guarantee you will love the way you look and enjoy your fitness journey
                                training how you want and enjoying all the food you like.
                                </p>
                                <button className=''>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
