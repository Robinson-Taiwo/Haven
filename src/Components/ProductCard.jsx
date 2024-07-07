import React from 'react'
import image from "../assets/images/productImage1.png"
import heart from "../assets/icons/heart.svg"
import stars from "../assets/icons/stars.svg"

import "./ProductCard.css"

const ProductCard = () => {
    return (
        <div className='ProductCard-container' >

            <div className="productCard-image relative ">

                <img className='pc-image' src={image} alt="" />

                <img className='heart-image' src={heart} alt="" />

            </div>

            <div className="product-card-rate">

                <img className='heart-image' src={stars} alt="" />

            </div>





        </div>
    )
}

export default ProductCard