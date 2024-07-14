import React from "react";
import heart from "../assets/icons/heart.svg";
import star from "../assets/icons/star.svg";
import plus from "../assets/icons/plus.svg";
import minus from "../assets/icons/minus.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './Cart/CartSlice';

import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  image,
  size,
  originalPrice,
  oldPrice,
  openCart,
  setOpenCart,
  product
}) => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    console.log(dispatch(addItemToCart(product)));
    dispatch(addItemToCart(product))
    // toast.success('product added successfully.')

    console.log(cartItems)
    console.log(product)
  };

  return (
    <div className="ProductCard-container   relative  z-10 ">
      <div className="productCard-image relative">
        <img
          className="pc-images"
          src={`https://api.timbu.cloud/images/${image}`}
          alt=""
        />

        <img className="heart-image" src={heart} alt="" />
      </div>
      <div className="product-card-rate">
        <div className="flex flex-row laptop:mt-[0rem] mt-[2.25rem] gap-[0.5rem]">
          <img src={star} alt="" className="star-c" />
          <img src={star} alt="" className="star-c" />
          <img src={star} alt="" className="star-c" />
          <img src={star} alt="" className="star-c" />
          <img src={star} alt="" className="star-c" />
        </div>
      </div>


      <Link to={`/product/${product.id}`}>


        <div className="product-card-rate">
          <h3 className="h-[2.5rem]  laptop:h-[auto] " >{size}</h3>
          <h6>30 inches</h6>
        </div>
        <div className="original-price laptop:mb-[1rem] mb-[0rem]">
          NGN {originalPrice}
        </div>
        <s className="old-price">NGN {oldPrice}</s>

{console.log(product)}

      </Link>


      <button onClick={handleAddToCart} className="add-to-cart">
        <span>+</span> <span>Add to cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
