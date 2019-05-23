import React from 'react'
import '../../components/styles/Store.css'
import NavBar from '../../components/NavBar'
import ProductList from '../../components/ProductList'
import Cart from './cart'
import Default from '../../components/Default'



class Store extends React.Component{
    render(){
        return(
            <React.Fragment>
                <NavBar />
                

                <div className='container-fluid products'>
                    <ProductList /> 
                    <Default />
                </div>
            </React.Fragment>
        )
    }
}

export default Store;