import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import "./LandingPage.css"
import Cart from './Cart'
import Signup from './Signup'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/' element={<LandingPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/user' element={<Signup />} />




        </Routes>
    )
}

export default AppRoutes