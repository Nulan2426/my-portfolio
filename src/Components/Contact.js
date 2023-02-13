import React from "react";
import { useState } from "react";


const Contact = () => {
    
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your email"
                 
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                
                />
                <button type="submit">Submit</button>

            </form>
        </section>
    )
}

export default Contact

