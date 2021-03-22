import React from 'react'
import AddProduct from '../components/AddProduct'
import LoginBox from '../components/LoginBox'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from '../reusable/Navbar'
import ContactUs from '../reusable/ContactUs'
import Marketing from '../reusable/Marketing'
import Service from '../reusable/Service'
import SignUp from '../reusable/SignUp'
import Home from '../reusable/Home'
// import Product from '../resuable/Product'

export default function Login() {
    return (
        <div>
        {/* <LoginBox/>     */}
        {/* <AddProduct/> */}
        
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services' exact component={Service}/>
            {/* <Route path='/product' exact component={Product}/> */}
            <Route path='/contact-us' exact component={ContactUs}/>
            <Route path='/sign-up' exact component={SignUp}/>
            <Route path='/marketing' exact component={Marketing}/>

        </Switch>
        </div>
    )
}