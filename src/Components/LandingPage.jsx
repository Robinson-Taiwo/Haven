import React, { useState } from "react";
import mastercard from "../assets/icons/mastercard.svg";
import search from "../assets/icons/searchIcon.svg";
import user from "../assets/icons/user.svg";
import cart from "../assets/icons/cart.svg";
import logo from "../assets/icons/logo.svg";
import arrowd from "../assets/icons/arrow-down.svg";
import menu from "../assets/icons/menu.svg";

import data from "./data";

import "./LandingPage.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import Cart from "./Cart";

const LandingPage = () => {
  const [activeLink, setActiveLink] = useState("");
  const [openCart, setOpenCart] = useState(false);
  const [open, setOpen] = useState(false);

  const options = [
    "Price: Low to High",
    "Price: High to Low",
    "Best Sellers",
    "New Arrivals",
  ];

  const [selectedOption, setSelectedOption] = useState("Select an option");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Define nav items
  const navItems = ["Type", "Hot Deals", "Brand"];

  // Function to handle the click event
  const handleClick = (link) => {
    setActiveLink(link);
  };

  // const options = [
  //     { value: "price_low_to_high", label: "Price: Low to High" },
  //     { value: "price_high_to_low", label: "Price: High to Low" },
  //     { value: "best_sellers", label: "Best Sellers" },
  //     { value: "new_arrivals", label: "New Arrivals" },
  // ];
  const [selectedValue, setSelectedValue] = useState(options[0].value); // Initialize with first option

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className={` ${openCart ? "opc " : ""}`}>
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

        <img src={menu} alt="" className="hambugar" />

        <div className="logo">
          <img src={logo} className="navbar-logo" alt="logo" />
        </div>

        <div className="navbar-icons">
          <img src={search} alt="" className="navbar-icon" />

          <Link to="/user">
            <img src={user} alt="" className="navbar-icon" />
          </Link>
          <div onClick={() => setOpenCart(!openCart)}>
            {/* {console.log(openCart)} */}
            <img src={cart} alt="" className="navbar-icon" />
          </div>
        </div>
      </nav>

      {/*     Landing Page Hero Sction */}
      <section className={`hero-section ${openCart ? "" : ""}`}>
        {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />}

        <div className="hero-texts">
          <h1 className="cllk">New Arrivals!!!</h1>
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

      <section className="products-lists   relative ">
        <div className="flashSales-cont  z-[100]   absolute ">
          <div className=" in-co  relative">
            <div className="flash-sales-texts laptop:pr-[0rem] pr-[1.56rem] ">
              <span>Flash Sales</span>
              <span>23:20:01</span>
            </div>

            <div className="container-dp z-[10]  pr-[1.56rem] flex  laptop:pr-[0rem]  w-[16rem] h-[50vh] laptop:h-[30vh] right-[0]  ">
              <button className="dropdown" onClick={() => setOpen(!open)}>
                <p> Sort By </p>
                <img src={arrowd} alt="" />
              </button>

              {open && (
                <div className="dropdown-dp     ">
                  <div>Price: Low to High</div>
                  <div>Price: High to Low</div>
                  <div>Best Sellers</div>
                  <div>New Arrivals</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="product-section ">
          <div className="product-section-container ">
            {data.map((product, index) => (
              <ProductCard
                openCart={openCart}
                setOpenCart={setOpenCart}
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
    </div>
  );
};

export default LandingPage;
