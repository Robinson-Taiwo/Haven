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
  const [totalpost, setTotalPost] = useState(20); // Op
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
        setLoading(true);
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
        // setTotalPost(response.data.total);
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
<div>hello world</div>

      )}







    </>
  );
};

export default LandingPage;
