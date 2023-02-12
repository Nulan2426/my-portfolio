import React from "react";
import { useState } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async e => {
        e.preventDefault();
        // send the form data to SendGrid API
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
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

export default Contact

{/* <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea type="text" id="name" />
                </div> */}