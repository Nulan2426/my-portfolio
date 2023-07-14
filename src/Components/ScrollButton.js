import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import '../Styling/ScrollButton.css'

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true)
        }
        else if (scrolled <= 200) {
            setVisible(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button class='scroll-button'>
            <br />
            <FaArrowCircleUp class='circle' onClick={scrollTop}
                style={{ display: visible ? 'inline' : 'none' }} />
        </button>
    );
}

export default ScrollButton