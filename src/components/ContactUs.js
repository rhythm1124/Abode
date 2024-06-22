import React from "react";
import './ContactUs.css';

const ContactUs=()=>{
    return(
       <div className="section">
        <div className="box">
            <div className="info">
            <h2 className="title">Contact Information</h2>
            <h3 className="sub-title">Fill up the form and our team will get back to you </h3>
            <ul className="details">
                <li>
                    <span>Phone:</span><a href="tel:+91 9988005090">+91 9988005090</a>
                </li>
                <li>
                    <span>Email:</span><a href="mailto:abc@gmail.com">abc@gmail.com</a>
                </li>
            </ul>
            </div>

        <div className="form">
            <form action="#" method="post">
                <h2 className="form-title">Send us a message </h2>
                <div className="fields">
                    <div className="group">
                        <input type="text" className="fname" placeholder="First Name"/>
                    </div>
                    <div className="group">
                        <input type="text" className="lname" placeholder="Last Name"/>
                    </div>
                    <div className="group">
                        <input type="email" className="email" placeholder="Email Id"/>
                    </div>
                    <div className="group">
                        <textarea name="message" id="" placeholder="Write your message"/>
                    </div>
                </div>
                <input type="submit" value="Send message" className="submit"/>
            </form>
        </div>
        </div>
       </div>
    );
};
export default ContactUs;