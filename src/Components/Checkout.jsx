import React, { useState } from "react";
import back from "../assets/icons/arrow-left.svg";
import image1 from "../assets/images/image2.png";
import wallet from "../assets/icons/wallet.svg";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, saveFormData } from './Cart/CartSlice'

const Checkout = () => {


  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const initialFormData = {
    email: "",
    firstName: "",
    lastName: "",
    state: "",
    streetAddress: "",
    city: "",
    region: "",
    areaNumber: "+234",
    phoneNumber: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Form Data Saved: ", formData);
    dispatch(saveFormData(formData)); // Dispatch the saveFormData action 
    dispatch(clearCart()); // Clear the cart after saving
    setFormData(initialFormData); // Clear the form after saving
  };



  return (
    <section className="checkout-total-section">
      <div className="checkout-Page-section">
        <div className="W-[100%]">
          <Link
            className="absolute laptop:top-[1.75rem] laptop:left-[5.75rem] top-[1rem] left-[2rem]"
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
                    <p className="text-[0.75rem] laptop-[1rem]">
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
                    <label htmlFor="email">Email Address*</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="two-input-form">
                    <div className="one-input-form desktop:w-[19.625rem] w-[45%] laptop:w-[45%]">
                      <label htmlFor="firstName">First Name*</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="one-input-form desktop:w-[19.625rem] w-[45%] laptop:w-[45%]">
                      <label htmlFor="lastName">Last Name*</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="one-input-form">
                    <label htmlFor="state">State/Province*</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="one-input-form">
                    <label htmlFor="streetAddress">Street Address*</label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="two-input-form">
                    <div className="one-input-form desktop:w-[19.625rem] w-[45%] laptop:w-[45%]">
                      <label htmlFor="city">City*</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="one-input-form desktop:w-[19.625rem] w-[45%] laptop:w-[45%]">
                      <label htmlFor="region">Region*</label>
                      <input
                        type="text"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="two-input-form">
                    <div className="one-input-form desktop:w-[19.625rem] w-[40%] laptop:w-[40%]">
                      <label htmlFor="areaNumber">Area Number*</label>
                      <select
                        className="w-[4.06rem]"
                        name="areaNumber"
                        value={formData.areaNumber}
                        onChange={handleChange}
                      >
                        <option value="+234">+234</option>
                        {/* Add other area codes if needed */}
                      </select>
                    </div>

                    <div className="one-input-form desktop:w-[19.625rem] w-[45%] laptop:w-[45%]">
                      <label htmlFor="phoneNumber">Phone Number*</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-[100%]">
                    <button className="save-button" onClick={handleSave}>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-container">
              <div className="oc-first-container">
                <h1>My Order</h1>
                <p>Edit</p>
              </div>

              <div className="oc-line"></div>

              {cart.items.map((item) => (
                <div key={item.id} className="reciept-card">
                  <img src={item.photos[0] ? `https://api.timbu.cloud/images/${item.photos[0].url}` : ""} className="rc-image" alt={item.name} />
                  <div className="reciept-card-texts">
                    <h1>{item.name}</h1>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: NGN {item.current_price[0]?.NGN[0]}</p>
                  </div>
                </div>
              ))}

              <div className="oc-line"></div>

              <div className="rc-calc">
                <div className="rcc-subtotal">
                  <h1>Cart Subtotal:</h1>
                  <p>NGN {cart.total}</p>
                </div>

                <div className="rcc-subtotal flex items-center ">
                  <h1>Delivery:</h1>
                  <p className="ml-[2.1rem]">Free Delivery</p>
                </div>
              </div>

              <div className="oc-line"></div>

              <div className="rc-calc">
                <div className="rcc-subtotal  desktop:gap-[12.75rem] laptop:gap-[14rem]  tablet:gap-[20rem] gap-[8.03rem] ">
                  <h1>Total:</h1>
                  <p>NGN {cart.total}</p>
                </div>
              </div>

              <div className="rc-button">
                <Link className="rcbl" to="/payment">
                  <span>
                    <img src={wallet} alt="" />
                  </span>
                  <span>Pay Now</span>
                </Link>
              </div>

              <div className="remember-card w-[100%] py-[0.5rem]">
                <label className="custom-checkbox">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkmark"></span>
                  <span className="remember tablet:text-[1rem] laptop:text-[0.95rem] text-[0.65rem] text-[black]">
                    I have read and agreed to the Haven shop Terms of Use and Privacy Policy.
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
