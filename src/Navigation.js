import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import App from './App'
import ProductPage from './ProductPage'


const Navigation = () => {

    return ( 
        <Router>
            <Route path='/' exact component={App}/>
            <Route path='/p' exact component={ProductPage}/>
            
        </Router>
    )

}

export default Navigation