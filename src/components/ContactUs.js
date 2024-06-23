import React, { useState } from "react";
import './ContactUs.css';

const ContactUs=()=>{
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        message:''
    });

    const handleChange = (e) => {
        const {name,  value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        const {firstName, lastName, email, message} = formData;
        
        if(!firstName || !lastName || !email || !message){
            alert("Please fill up all the details.");
            return;
        }
        alert('Your message has been sent successfully');
    };

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
                        <input type="text" className="fname" placeholder="First Name" value={formData.firstName} onChange={handleChange} required/>
                    </div>
                    <div className="group">
                        <input type="text" className="lname" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required/>
                    </div>
                    <div className="group">
                        <input type="email" className="email" placeholder="Email Id" value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div className="group">
                        <textarea name="message" id="a" placeholder="Write your message" value={formData.message} onChange={handleChange} required/>
                    </div>
                </div>
                <input type="submit" value="Send message" className="submit" onClick={onSubmit}/>
            </form>
        </div>
        </div>
       </div>
    );
};
export default ContactUs;