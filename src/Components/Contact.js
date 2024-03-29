import React from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { Modal, Button, ModalBody, ModalFooter } from "react-bootstrap";
import "../Styling/Contact.css"


const Contact = () => {

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });

    const [show, setShow] = useState(false);

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
                setFormData({
                    user_name: "",
                    user_email: "",
                    message: ""
                });
                setShow(true);
            },
                (err) => {
                console.error('Failed to send email: ', err);
            });
    };

    
    return (
        <section class="contact" id="contact">
            <h2>CONTACT</h2>
            <form class="form" onSubmit={handleSubmit}>
                <input required
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    value={formData.user_name}
                    onChange={handleChange}
                
                />
                <input required
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    value={formData.user_email}
                    onChange={handleChange}
                 
                />
                <textarea required
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <button class="button" type="submit">Submit</button>
                <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Message sent</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thank you for reaching out!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            CLOSE
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>



        </section>
    )
}

export default Contact;

