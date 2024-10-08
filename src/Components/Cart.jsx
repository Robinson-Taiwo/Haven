import React from "react";
import close from "../assets/icons/close-circle.svg";
import cart from "../assets/icons/small-cart.svg";
import image from "../assets/images/image2.png";
import image1 from "../assets/images/image1.png";
import plus from "../assets/icons/plus.svg";
import minus from "../assets/icons/minus.svg";
import "./Cart.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from 'react-redux'

import { decreaseItemQuantity, increaseItemQuantity, removeItemFromCart } from './Cart/CartSlice'

import CartCard from "./CartCard";

const Cart = ({ openCart, setOpenCart }) => {


    const cartItems = useSelector((state) => state.cart.items);
    const cartTotal = useSelector((state) => state.cart.total);
    const dispatch = useDispatch();

    const handleDecrease = (id) => {
        dispatch(decreaseItemQuantity({ id }));
    };

    const handleIncrease = (id) => {
        dispatch(increaseItemQuantity({ id }));
    };

    const handleRemove = (id) => {
        dispatch(removeItemFromCart({ id }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };



 
    return (
        <div className="cart-container overflow-x-auto  overflow-y-auto ">
            <div className="cart-content-container">
                <div className="  bg-[#FAF5FF] ">
                    <div className="cart-content-nav">
                        <img className="ccni" src={cart} alt="" />

                        <p className="text-[1rem]  tablet:text-[1.5rem] " >REVIEW YOUR CART</p>

                        <img
                            className="ccni"
                            onClick={() => setOpenCart(!openCart)}
                            src={close}
                            alt=""
                        />
                    </div>

                    <div className="cart-line"></div>

                    <div className="success-cart">
                        <span>World wide shipping</span> <span>+</span>{" "}
                        <span>Easy Returns</span>
                    </div>

                    <div className="justify-center flex w-[100%]">
                        <div className="cart-line laptop:w-[23.1rem] mt-[0.33rem] w-[6.4735rem] mb-[1.56rem] laptop:mb-[5.19rem]  "></div>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="empty-cart-message">
                            <div className="w-[100%]   flex items-center justify-center  font-bold text-[1.5rem] text-center py-[3rem]  text-[#434834] "   >


                                Your Cart is empty. Please add a product

                            </div>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="cart-card">
                                <img src={item.photos[0] ? `https://api.timbu.cloud/images/${item.photos[0].url}` : ""} alt="" className="cart-card-image" />
                                <div className="cart-card-texts">
                                    <div className="cart-card-deets">
                                        <h1>{item.name}</h1>
                                        <h3>Size: 30 inches</h3>
                                        <h4>Price: NGN {item.current_price[0]?.NGN[0]}</h4>
                                        <h5>Warranty years: 1 year</h5>
                                        <p onClick={() => handleRemove(item.id)}>Remove</p>
                                    </div>
                                    <div className="card-cart-quantity">
                                        <img src={plus} alt="" onClick={() => handleIncrease(item.id)} />
                                        <p>{item.quantity}</p>
                                        <img src={minus} alt="" onClick={() => handleDecrease(item.id)} />
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                    <div className="cart-line w-[100%] mt-[1.96rem] "></div>

                    <div className="cart-line w-[100%] mt-[1.96rem] laptop:mt-[7rem] "></div>



                    <div className="card-slider-head font-semibold bg-[#FAF5FF]  w-[100%]  flex items-center justify-center mb-[0.95rem] laptop:text-[1.5rem] laptop:mb-[0.81rem]  mt-[1.35rem] laptop:mt-[7.19rem] ">
                        YOU MAY ALSO LIKE
                    </div>


                    <div className=" overflow-cart bg-[#FAF5FF] laptop:pt-[3rem] " >


                        <div className="real-overflow bg-[#FAF5FF] flex pl-[1.28rem]  gap-[0.51rem] flex-row  ">
                            <CartCard />
                            <CartCard />
                            <CartCard />
                            <CartCard />
                            <CartCard />


                        </div>



                    </  div>

                    <div className="cart-fixed bg-[white]   h-fit ">
                        <div className="subtotal-cart mt-[3rem] laptop:pt-[4.44rem] pt-[1.16rem] laptop:px-[5.08rem] px-[1.42rem] flex flex-row justify-between laptop:mb-[4.44rem] mb-[1.3rem] laptop:text-[1.5rem] text-[0.775rem] font-semibold ">
                            <p> SUBTOTAL</p>

                            <h4>NGN {cartTotal.toFixed(2)}</h4>
                        </div>

                        <div className="flex justify-center ">
                            <Link
                                to="/checkout"
                                className="cart-checkout laptop:px-[5rem] px-[1.4rem] bg-[#434834] text-[white] text-[0.9rem] laptop:py-[0.75rem] laptop:text-[1rem] py-[0.21rem] rounded-[0.17494rem] laptop:mb-[6.31rem] mb-[1.49rem] laptop:rounded-[0.625rem] "
                            >
                                CHECKOUT
                            </Link>
                        </div>

                        <div className="items-center flex justify-center w-[100%]">
                            <p className="w-[18.75rem] laptop:text-[0.8rem] laptop:w-[69.87rem] text-[0.55rem] mb-[1rem] pb-[0rem] laptop:mb-[4.44rem] tablet:w-[80%] laptop:px-[3rem] text-center  ">
                                By clicking on “CHECKOUT”, you will be directed to the checkout
                                page where payment will be taken and your order fulfilled using
                                your payment card. Note that we “ONLY” accept valid payment card
                                (Master Card, Verve Card and Visa).
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cart;
