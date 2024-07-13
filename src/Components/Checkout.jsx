import React from "react";
import back from "../assets/icons/arrow-left.svg";
import image1 from "../assets/images/image2.png";
import wallet from "../assets/icons/wallet.svg";
import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <section className="checkout-total-section">
      <div className="checkout-Page-section">
        <div className="W-[100%]">
          <Link
            className="absolute laptop:top-[1.75rem] laptop:left-[5.75rem] top-[1rem] left-[2rem]  "
            to="/"
          >
            <img src={back} alt="" />
          </Link>
        </div>

        <div className="pout-container">
          <div className="out-container">
            <div className="delivery-container">
              <div className="d-first-frame">
                <div className="ffd">
                  <div>
                    <h2 className="dvm">Delivery Method </h2>
                  </div>

                  <div className="express-del">
                    <h2 className="text-[0.75rem] laptop:text-[1rem]">
                      Express Delivery
                    </h2>

                    <p>Free</p>
                  </div>

                  <div>
                    <p className="text-[0.75rem] laptop-[1rem] ">
                      Delivered on or before Wednesday 10th July
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-second-frame">
                <div className="delivery-address">
                  <h2>Delivery Address </h2>
                </div>

                <div className="long-input-forms flex flex-col gap-[2.25rem]">
                  <div className="one-input-form">
                    <label htmlFor="">Email Address*</label>

                    <input type="text" />
                  </div>

                  <div className="two-input-form">
                    <div className="one-input-form desktop:w-[19.625rem] w-[45%] laptop:w-[45%]  ">
                      <label htmlFor="">First Name*</label>

                      <input type="text" />
                    </div>

                    <div className="one-input-form desktop:w-[19.625rem] w-[45%] laptop:w-[45%]  ">
                      <label htmlFor="">Last Name*</label>

                      <input type="text" />
                    </div>
                  </div>

                  <div className="one-input-form">
                    <label htmlFor="">State/Province*</label>

                    <select type="text" />
                  </div>

                  <div className="one-input-form">
                    <label htmlFor="">Street Address*</label>

                    <input type="text" />
                  </div>

                  <div className="two-input-form">
                    <div className="one-input-form desktop:w-[19.625rem] w-[45%] laptop:w-[45%] ">
                      <label htmlFor="">City*</label>

                      <input type="text" />
                    </div>

                    <div className="one-input-form desktop:w-[19.625rem] w-[45%] laptop:w-[45%] ">
                      <label htmlFor="">Region*</label>

                      <input type="text" />
                    </div>
                  </div>

                  <div className="two-input-form">
                    <div className="one-input-form desktop:w-[19.625rem] w-[40%] laptop:w-[40%] ">
                      <label htmlFor="">Area Number*</label>

                      <select
                        className="w-[4.06rem]"
                        value="+234"
                        type="text"
                      />
                    </div>

                    <div className="one-input-form desktop:w-[19.625rem] w-[45%] laptop:w-[45%]  ">
                      <label htmlFor="">Phone Number*</label>

                      <select />
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-[100%]">
                    <button className="save-button">Save</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-container ">
              <div className="oc-first-container">
                <h1>My Order</h1>

                <p>Edit</p>
              </div>

              <div className="oc-line"> </div>

              <div className="reciept-card">
                <img src={image1} className="rc-image" alt="" />

                <div className="reciept-card-texts">
                  <h1>King size Bedding and Platform </h1>

                  <p>Quantity: 2</p>

                  <p>Price: NGN 500,000</p>
                </div>
              </div>

              <div className="oc-line"> </div>

              <div className="rc-calc">
                <div className="rcc-subtotal">
                  <h1>Cart Subtotal:</h1>

                  <p> NGN1,000,000.00 </p>
                </div>

                <div className="rcc-subtotal">
                  <h1>Delivery:</h1>

                  <p className="ml-[2.1rem]"> Free Delivery</p>
                </div>
              </div>

              <div className="oc-line"> </div>

              <div className="rc-calc">
                <div className="rcc-subtotal">
                  <h1>Total:</h1>

                  <p>NGN 1,000,000.00</p>
                </div>
              </div>

              <div className="rc-button">
                <Link className="rcbl" to="/payment">
                  <span>
                    <img src={wallet} alt="" />
                  </span>{" "}
                  <span> Pay Now</span>
                </Link>
              </div>

              <div className="remember-card w-[100%] py-[0.5rem]">
                <label className="custom-checkbox">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkmark"></span>
                  <span className="remember laptop:text-[0.85rem]  text-[0.65rem] text-[black] ">
                    I have read and agreed to the Haven shop Terms of Use and
                    Privacy Policy.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-footer">
          <p>Terms and condition</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
