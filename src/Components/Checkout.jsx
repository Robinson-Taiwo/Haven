import React from 'react'
import back from "../assets/icons/arrow-left.svg"

import "./Checkout.css"
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <>

            <div className="checkout-Page-section">




                <div className='W-[100%]' >
                    <Link className="absolute top-[1.75rem] left-[5.75rem] " to="/" >
                        <img src={back} alt="" />

                    </Link>
                </div>


                <div className='' >

                    <div className="out-container">

                        <div className="delivery-container">




                            <div className="d-first-frame">

                                <div className="ffd">
                                    <div>

                                        <h2>Delivery Method </h2>
                                    </div>

                                    <div className="express-del">

                                        <h2>Express Delivery</h2>

                                        <p>Free</p>

                                    </div>

                                    <div>
                                        <p>Delivered on or before Wednesday 10th July</p>

                                    </div>

                                </div>
                            </div>


                            <div className="d-second-frame">


                                <div className='delivery-address' >
                                    <h2>Delivery Address </h2>
                                </div>



                                <div className="long-input-forms flex flex-col gap-[2.25rem]">

                                    <div className="one-input-form">
                                        <label htmlFor="">Email Address*</label>

                                        <input type="text" />

                                    </div>

                                    <div className="two-input-form">
                                        <div className="one-input-form laptop:w-[19.625rem] ">
                                            <label htmlFor="">First Name*</label>

                                            <input type="text" />

                                        </div>

                                        <div className="one-input-form laptop:w-[19.625rem] ">
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
                                        <div className="one-input-form laptop:w-[19.625rem] ">
                                            <label htmlFor="">City*</label>

                                            <input type="text" />

                                        </div>

                                        <div className="one-input-form laptop:w-[19.625rem] ">
                                            <label htmlFor="">Region*</label>

                                            <input type="text" />

                                        </div>

                                    </div>

                                    <div className="two-input-form">
                                        <div className="one-input-form laptop:w-[19.625rem] ">
                                            <label htmlFor="">Area Number*</label>

                                            <select className='w-[4.06rem]' value="+234" type="text" />

                                        </div>

                                        <div className="one-input-form laptop:w-[19.625rem] className='w-[34.25rem]'  ">
                                            <label htmlFor="">Phone Number*</label>

                                            <select />

                                        </div>

                                    </div>


                                    <div className='flex items-center justify-center w-[100%]' >

                                        <button className='save-button'>Save</button>
                                    </div>





                                </div>




                            </div>




                        </div>










                        <div className="order-container">



                        </div>

                    </div>
                </div>


            </div>



        </>
    )
}

export default Checkout