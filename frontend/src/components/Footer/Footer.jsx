import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Delivering delicious meals right to your doorstep. Experience the taste of convenience with FoodieDelights.From classic favorites to innovative culinary creations, our commitment to quality and taste sets us apart.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                 <h2>Get In Touch</h2>
                 <ul>
                    <li>+1-436-645-7560</li>
                    <li>contact@hungryhustle.com</li>
                 </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright"> Copyright 2024 HungryHustle.com - All rights reserved.</p>
        </div>
    )
}

export default Footer