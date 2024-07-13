import React, { useEffect, useState } from "react";
import mastercard from "../assets/icons/mastercard.svg";
import search from "../assets/icons/searchIcon.svg";
import user from "../assets/icons/user.svg";
import cart from "../assets/icons/cart.svg";
import logo from "../assets/icons/logo.svg";
import arrowd from "../assets/icons/arrow-down.svg";
import arrowup from "../assets/icons/arrow-up.svg";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";

import data from "./data";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import axios from "axios";
import Cart from "./Cart";
import Pagination from "./Pagination";

const LandingPage = () => {
  const [activeLink, setActiveLink] = useState("");
  const [openCart, setOpenCart] = useState(false);
  const [open, setOpen] = useState(false);

  const options = ["Kids beds", "Mordern", "beds with store", "Adjustable"];

  const [selectedOption, setSelectedOption] = useState("Sort By");
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

  const [time, setTime] = useState({
    hours: 23,
    minutes: 20,
    seconds: 1,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(0); // Op
  const [totalpost, setTotalPost] = useState(0); // Op
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(
    "d4614b8ddc2f493cb63ffa75f29e799b"
  );
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = products.length > 0 ? products.slice(firstPostIndex, lastPostIndex) : [];
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products", {
          params: {
            organization_id: "6543fa8ab7f743228e7902f501b5dca6",
            reverse_sort: false,
            page: currentPage,
            size: 12,
            Appid: "W1V4BL5K9FDWO97",
            Apikey: "0ddf5c22ff2b4d988fabb85eb2bd456e20240712202624623806",
            category_id: categoryId,
          },
        });
        setProducts(response.data.items);
        // console.log(response.data);
        // console.log(response.data.items)
        setTotalPages(Math.ceil(response.data.total / postsPerPage));
        setPostsPerPage(response.data.size);
        setTotalPost(response.data.total);
        setLoading(false);





        // console.log('Total Products:', response.data.total);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, categoryId]);

  const filteredProducts = products && products.length > 0
    ? products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];


  //   const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategoriesMap = new Map();

      products.forEach((item) => {
        item.categories.forEach((category) => {
          if (!uniqueCategoriesMap.has(category.name)) {
            uniqueCategoriesMap.set(category.name, category.id);
          }
        });
      });

      const uniqueCategories = Array.from(
        uniqueCategoriesMap,
        ([name, id]) => ({ name, id })
      );
      setCategories(uniqueCategories);
    }
  }, [products]);

  useEffect(() => {
    window.scrollTo(0, 200);
  }, [currentPage]);

  const formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // const uniqueCategories = [...new Set(products.items.flatMap(item => item.categories.map(cat => cat.name)))].slice(0, 3);

  return (
    <>

      {loading ? "loading website" : (

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

            <div className={showSearch ? "show-searchbg" : "hide-searchbg"}>
              <div className="div-search flex flex-row w-[100%] items-center justify-evenly ">
                <input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  className={showSearch ? "show-search" : "hide-search"}
                />

                <img
                  src={close}
                  onClick={() => {
                    setShowSearch(!showSearch);
                    setSearchQuery("");
                  }}
                  className="navbar-logo h-[2rem] w-[3rem] mr-[1rem]   "
                  alt=""
                />
              </div>
            </div>

            <div className="navbar-icons">
              <img
                src={search}
                onClick={() => setShowSearch(!showSearch)}
                alt=""
                className="navbar-icon"
              />

              <Link to="/user">
                <img src={user} alt="" className="navbar-icon" />
              </Link>
              {/* <div className="red-dot"></div> */}

              <div
                className="relative flex flex-col h-[fit] w-[fit]"
                onClick={() => setOpenCart(!openCart)}
              >
                <img src={cart} alt="" className="navbar-icon" />
              </div>
            </div>
          </nav>

          {/*     Landing Page Hero Sction */}
          <section className={`hero-section relative ${openCart ? "" : ""}`}>
            {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />}

            {searchQuery !== "" && (
              <div
                className={
                  searchQuery !== ""
                    ? "search-result top-[0] w-[100%] z-[10000] absolute  bg-white "
                    : "hide-drawer"
                }
              >
                {filteredProducts.map((product) => (
                  <ul
                    className=" search-lists  flex flex-col  px-[1rem] "
                    key={product.id}
                  >
                    <li className=" ">{product.name}</li>
                  </ul>
                ))}
              </div>
            )}

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

          <section className="products-lists  flex items-center justify-center flex-col  relative ">
            <div className="dropdown-container desktop:w-[81rem] flex items-end  flex-col laptop:flex-row w-[100%] tablet:w-[90%] laptop:items-center laptop:justify-between h-fit  laptop:h-[3rem] ">
              <div className="flash-sales-texts w-fit justify-end  laptop:justify-center flex laptop:pr-[0rem]  ">
                <span>Flash Sales</span>
                <span>
                  {" "}
                  {formatTime(time.hours)}:{formatTime(time.minutes)}:
                  {formatTime(time.seconds)}
                </span>
              </div>

              <div className="container-dpo w-fit justify-end  relative ">
                <button
                  className="dropdown h-[2.5rem] text-[0.875rem] laptop:text-[1rem] laptop:h-[100%] "
                  onClick={() => setOpen(!open)}
                >
                  <p> {selectedOption} </p>
                  {open ? (
                    <img src={arrowd} alt="" />
                  ) : (
                    <img src={arrowup} alt="" />
                  )}
                </button>

                {open && (
                  <div className="dropdown-dp0  pt-[0.88rem] pb-[0.81rem] pl-[0.94rem] pr-[1rem] w-[11.81rem] right-0  top-[3rem] laptop:w-[100%]  z-[100] absolute laptop:top-[4rem] ">
                    {
                      // uniqueCategories
                      categories.map((item, index) => (
                        <React.Fragment key={index}>
                          <button
                            onClick={() => {
                              setCategoryId(item.id);
                              setSelectedOption(item.name);
                              setOpen(!open);
                            }}
                          >
                            {item.name}
                          </button>
                          {index < options.length - 1 && (
                            <div className="black-line"></div>
                          )}
                        </React.Fragment>
                      ))
                    }
                  </div>
                )}
              </div>
            </div>

            <div className="product-section ">
              {loading ? (
                <p>Loading products...</p>
              ) : (
                <div className="product-section-container  tablet:gap-x-[3rem] laptop:gap-x-[1.62rem]  ">
                  {/* {products.map((product, index) => (
                    <ProductCard
                      openCart={openCart}
                      setOpenCart={setOpenCart}
                      key={index}
                      image={product.photos[0].url}
                      size={product.name}
                      originalPrice={products[0].current_price[0]?.NGN[0]}
                      oldPrice={product.oldPrice}
                    />
                  ))} */}
                </div>
              )}



              <div className="load-more">
                <Pagination
                  totalPosts={totalpost}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </section>

          <>
            <Footer />
          </>
        </div>

      )}







    </>
  );
};

export default LandingPage;
