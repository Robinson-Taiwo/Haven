import React from "react";
import close from "../assets/icons/close-circle.svg";
import cart from "../assets/icons/small-cart.svg";
import image from "../assets/images/image2.png";
import plus from "../assets/icons/plus.svg";
import minus from "../assets/icons/minus.svg";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ openCart, setOpenCart }) => {
    return (
        <div className="cart-container">
            <div className="cart-content-container">
                <div className="cart-content-nav">
                    <img className="ccni" src={cart} alt="" />

                    <p>REVIEW YOUR CART</p>

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

                <div>
                    <div className="cart-card">
                        <img src={image} alt="" className="cart-card-image" />

                        <div className="cart-card-texts">
                            <div className="cart-card-deets">
                                <h1>King-size Bedding And Platform</h1>

                                <h3>Size: 30 inches</h3>

                                <h4>Price: NGN 500,000</h4>

                                <h5>Warranty years: 1 year</h5>

                                <p>Remove</p>
                            </div>

                            <div className="card-cart-quantity">
                                <img src={plus} alt="" />

                                <p>1</p>

                                <img src={minus} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="cart-line w-[100%] mt-[1.96rem] "></div>
                </div>

                <div>
                    <div className="cart-card laptop:mt-[7rem] mt-[1.96rem]">
                        <img src={image} alt="" className="cart-card-image" />

                        <div className="cart-card-texts">
                            <div className="cart-card-deets">
                                <h1>King-size Bedding And Platform</h1>

                                <h3>Size: 30 inches</h3>

                                <h4>Price: NGN 500,000</h4>

                                <h5>Warranty years: 1 year</h5>

                                <p>Remove</p>
                            </div>

                            <div className="card-cart-quantity">
                                <img src={plus} alt="" />

                                <p>1</p>

                                <img src={minus} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="cart-line w-[100%] mt-[1.96rem] laptop:mt-[7rem] "></div>

                    <div className="may-like w-[100%] flex justify-center  ">
                        <h1 className="may-like-text text-[0.4975rem] font-semibold laptop:text-[1.5rem] laptop:mt-[4.31rem] ">
                            YOU MAY ALSO LIKE
                        </h1>
                    </div>

                    <div className="subtotal-cart laptop:pt-[4.44rem] pt-[1.24rem] laptop:px-[5.08rem] px-[1.42rem] flex flex-row justify-between laptop:mb-[4.44rem] mb-[1.47rem] laptop:text-[1.5rem] text-[0.375rem] font-semibold ">
                        <p> SUBTOTAL</p>

                        <h4>NGN 1,000,000.00</h4>
                    </div>

                    <div className="flex justify-center ">
                        <Link to="/checkout" className="cart-checkout laptop:px-[5rem] px-[1.4rem] bg-[#434834] text-[white] text-[0.5rem] laptop:py-[0.75rem] laptop:text-[1rem] py-[0.21rem] rounded-[0.17494rem] laptop:mb-[6.31rem] mb-[1.49rem] laptop:rounded-[0.625rem] ">
                            CHECKOUT
                        </Link>
                    </div>

                    <div className="items-center flex justify-center w-[100%]">
                        <p className="w-[18.75rem] laptop:text-[1rem] laptop:w-[69.87rem] text-[0.25rem] laptop:mb-[4.44rem] ">
                            By clicking on “CHECKOUT”, you will be directed to the checkout
                            page where payment will be taken and your order fulfilled using
                            your payment card. Note that we “ONLY” accept valid payment card
                            (Master Card, Verve Card and Visa).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
