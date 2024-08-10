import React from 'react'
import './Footer.css'
import logo3 from '../../assets/logo3.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo3} alt=''/>
                {/* <p>I am Front end Developer Yes, I have completed my graduation.</p> */}
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''/>
                    <input type="email" placeholder='Enter Your Email'/>
                </div>
                <dic className="footer-subscribe">Subscribe</dic>
            </div>
        </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footerbottom-left">
            &copy; 2021 All rights reserved
        </p>
        <div className="footer-bottom-right">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Legal</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
