import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import "./LandingPage.css"
import Cart from './Cart'
import Signup from './Signup'
// import Checkout from './Checkout'
import Payment from './Payment'
import Checkout from './Checkout'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/' element={<LandingPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/user' element={<Signup />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/checkout' element={<Checkout />} />






        </Routes>
    )
}

export default AppRoutes