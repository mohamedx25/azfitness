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
                        <h1>Personal Training</h1>
                        <p>my personal training is top of the line</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
