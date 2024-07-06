import React from 'react'
import mastercard from "../assets/icons/mastercard.svg"
import search from "../assets/icons/searchIcon.svg"
import user from "../assets/icons/user.svg"
import cart from "../assets/icons/cart.svg"


import "./LandingPage.css"
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        < >
            {/* this is the navbar container for navigation */}
            <nav className="navbar-container">

                <div className="navbar-links">

                    <h5 className="navbar-link">Type</h5>
                    <h5 className="navbar-link">Hot Deals</h5>
                    <h5 className="navbar-link">Brand</h5>

                </div>

                <div className="navbar-icons">

                    <img src={search} alt="" className="navbar-icon" />

                    <Link to="/user">
                        <img src={user} alt="" className="navbar-icon" />

                    </Link>
                    <Link to="/cart">

                        <img src={cart} alt="" className="navbar-icon" />
                    </Link>


                </div>

            </nav>

            {/*     Landing Page Hero Sction */}
            <section className="hero-section">


            </section>



        </>
    )
}

export default LandingPage