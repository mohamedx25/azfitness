import React from 'react'
import BioUI from './BioUI'

class Bio extends React.Component{
    render(){
        return(
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-6'>
                        <BioUI />
                        <BioUI />
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio;