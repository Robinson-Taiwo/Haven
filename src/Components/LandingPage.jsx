import React, { useState } from "react";
import mastercard from "../assets/icons/mastercard.svg";
import search from "../assets/icons/searchIcon.svg";
import user from "../assets/icons/user.svg";
import cart from "../assets/icons/cart.svg";
import logo from "../assets/icons/logo.svg";
import arrowd from "../assets/icons/arrow-down.svg";
import data from "./data";

import "./LandingPage.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const LandingPage = () => {
    const [activeLink, setActiveLink] = useState("");

    // Define nav items
    const navItems = ["Type", "Hot Deals", "Brand"];

    // Function to handle the click event
    const handleClick = (link) => {
        setActiveLink(link);
    };

    const [selected, setSelected] = useState("Sort by");
    const [isOpen, setIsOpen] = useState(false);
    const options = [
        "Price: Low to High",
        "Price: High to Low",
        "Best Sellers",
        "New Arrivals",
    ];

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <>
            {/* this is the navbar container for navigation */}
            <nav className="navbar-container">
                <div className="navbar-links">
                    {navItems.map((item, index) => (
                        <h5 key={index}>
                            <button
                                className={`navbar-link ${activeLink === item ? "active" : ""}`}
                                onClick={() => handleClick(item)}
                            >
                                {item}
                            </button>
                        </h5>
                    ))}
                </div>

                <div className="logo">
                    <img src={logo} className="navbar-logo" alt="logo" />
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
                <div className="hero-texts">
                    <h1>New Arrivals!!!</h1>
                    <h3 className="subheading">
                        Sleep like Royalty: Introducing our New Luxury Bed Collection.
                    </h3>

                    <p className="mimi-text">
                        Limited-time offer!! Shop our new bed arrivals and enjoy 15% off
                        your first purchase.
                    </p>

                    <button className="shopNow">Shop now</button>
                </div>
            </section>

            {/* this is the product page section */}

            <section className="products-lists">
                <div className="flashSales-container">
                    <div className="flash-sales-texts">
                        <span>Flash Sales</span>
                        <span>23:20:01</span>
                    </div>

                    <div className="dropdown">Sort by</div>
                </div>

                <div className="product-section">
                    <div className="product-section-container">
                        {data.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                size={product.size}
                                originalPrice={product.originalPrice}
                                oldPrice={product.oldPrice}
                            />
                        ))}
                    </div>

                    <div className="load-more">
                        <button>Load More</button>
                    </div>
                </div>
            </section>


            <>
                <Footer />
            </>


        </>
    );
};

export default LandingPage;
