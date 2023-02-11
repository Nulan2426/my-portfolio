import React from "react";

const Contact = () => {

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form>
                <div>
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
                </div>
            </form>
        </section>
    )
}