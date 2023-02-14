import React from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });;
    };

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.send('service_weac45x',
            'template_pyx7bck',
            formData,
            'd2ofAUCX57jxIkz7e')
            .then((response) => {
                console.log('Email successfully sent!');
                alert("Leisa here, your message has been sent. I appreciate you reaching out!");
                setFormData({
                    user_name: "",
                    user_email: "",
                    message: ""
                });
            }, (err) => {
                console.error('Failed to send email: ', err);
            });
    };

    
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    value={formData.user_name}
                    onChange={handleChange}
                
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your email"
                    value={formData.user_email}
                    onChange={handleChange}
                 
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;

