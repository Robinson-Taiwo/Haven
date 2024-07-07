import React from 'react'
import linkedin from "../assets/icons/linkedin.svg"
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footer-container' >


            <div className="footer-first-container">

                <h1>
                    Get the good stuff!
                </h1>

                <p>Connect with us on social media.Follow us on social media for sleep tips, new arrivals, and exclusive offers.</p>

                <div className="footer-icons">

                    <img src={linkedin} alt="" className="footer-icon" />
                    <img src={instagram} alt="" className="footer-icon" />
                    <img src={facebook} alt="" className="footer-icon" />


                </div>

            </div>



            <div className="footer-second-container">

                <div >
                    <h3 className='mb-[0.5rem]' >Company</h3>

                    <p className="footer-our">Our Story</p>
                    <p className="footer-our">Our Blog</p>
                    <p className="footer-our">Shop Haven</p>
                    <p className="footer-our">FAQ</p>
                </div>


                <div >
                    <h3 className='mb-[0.5rem]' >Customer services</h3>

                    <p className="footer-our">Contact Us</p>
                    <p className="footer-our">My Account</p>
                    <p className="footer-our">Shipping and Returns</p>
                </div>


            </div>



        </footer>
    )
}

export default Footer