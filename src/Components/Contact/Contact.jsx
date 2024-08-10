import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "190f5c60-99cc-4ea9-bd6d-86adc5a74ca7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's work together</h1>
                <p>Have a project you'd like to discuss?</p>
                <p>Feel free to get in touch with me.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={call_icon} alt=''/> <p>Phone: +92 312 4466057</p>
                    </div>
                    <div className="contact-detail">
                    <img src={mail_icon} alt=''/> <p>Email:zohaibmehar2775@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt=''/> <p>Location: Lahore, Pakistan</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Enter Your Name ' id="name"/>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Your Email ' id="email"/>
                <label htmlFor="message">Message</label>
                <textarea placeholder='Enter Your Message' rows='8' id="message"></textarea>
                <button type='submit' className='contact-submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
