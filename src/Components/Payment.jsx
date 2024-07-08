import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import back from "../assets/icons/arrow-left.svg"
import mastercard from "../assets/icons/mastercard.svg"
import cancle from "../assets/icons/close.svg"
import success from "../assets/icons/Success.svg"

import "./Payment.css"

const Payment = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto'; // Allow scrolling
    };

    return (
        <>

            <section className="checkout-page">

                <Link to="/" >

                    <img src={back} alt="" className="checkout-back" />

                </Link>


                <div className='w-[100%] flex items-center justify-center ' >

                    <div className="checkout-container">

                        <div className="payment-container">

                            <h1 className="Payment-text">Payment</h1>


                            <div className="payment-details-container">


                                <div className="payment-details-texts">

                                    <h4>Item</h4>

                                    <h4>Amount:</h4>


                                </div>

                                <div className="payment-detail-item mb-[0rem] ">

                                    <h4>kingsize</h4>

                                    <h4>NGN 500,000</h4>


                                </div>
                            </div>

                            <div className="deets-line w-[100%] laptop:w-[36.4rem] mt-[3rem] mb-[3.37rem]"></div>






                            {/* horizontal line */}
                            {/* <div className="hr-line"></div> */}

                            <div className="item-containerr">

                                <p className="amount-to-pay">Amount to pay</p>

                                <p className="kingsize-text laptop:text-[1.5rem] font-semibold ">NGN 500,000</p>

                            </div>

                            <div className="remember-card py-[0.5rem]">
                                <label className="custom-checkbox">
                                    <input type="checkbox" className="checkbox" />
                                    <span className="checkmark"></span>
                                    <span className="remember">Remember card details</span>
                                </label>
                            </div>

                        </div>

                        <div className="card-detail-container">

                            <h1 className="card-detail-text">
                                Card Details
                            </h1>

                            {/* <div className="card-form">

                            <div className="card-input">

                                <label htmlFor="#holder-name">Card Holder's Name</label>
                                <input type="text" className='input-line' />

                            </div>


                        </div> */}

                            <div className="card-form">

                                <div className="card-input">

                                    <label htmlFor="#holder-name">Card Holder's Name</label>
                                    <input type="text" className='card-input-line' />

                                    <div className="card-number-line">

                                    </div>

                                </div>


                            </div>

                            <div className="card-form">

                                <div className="card-input">

                                    <label htmlFor="#holder-name">Card Number</label>

                                    <div className="master-card-input">

                                        <input type="text" maxLength={16} className='card-input-line  w-[16.2rem] ' />

                                        <img src={mastercard} className='master-card-icon' alt="master card icon" />
                                    </div>
                                    <div className="card-number-line">
                                    </div>

                                </div>


                            </div>


                            <div className="card-deets-container">

                                <div className="deets-form  ">
                                    <h4>Expiry Date</h4>

                                    <input maxLength={9} type="text" />

                                    <div className="deets-line"></div>

                                </div>

                                <div className="deets-form mb-[4.75rem]">
                                    <h4>CVC/CVV</h4>

                                    <div className='cvc  flex items-center justify-center w-[100%]'>

                                        <input type="password" maxLength={3} className='cvc' />
                                    </div>

                                    <div className="deets-line "></div>

                                </div>

                            </div>

                            <div className="primary-button-container pb-[3rem] ">

                                <button onClick={openModal} className="primary-button">
                                    Pay now
                                </button>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="App">

                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal-content">

                                <button onClick={closeModal} className="cancle">
                                    <img src={cancle} alt="cancle icon" />
                                </button>


                                <div className="overlay-content">

                                    <img src={success} alt="check-icon" className="success-icon" />

                                    <p className="success-text">
                                        Payment Successful
                                    </p>

                                </div>

                                <Link to="/" className='bth underline'>Back to Home</Link>


                            </div>
                        </div>
                    )}
                </div>


            </section>


        </>
    )
}

export default Payment