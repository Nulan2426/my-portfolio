import React from 'react';
import './About.css'
import Slider from 'react-slick'
import leisa1 from '../Assets/leisa1.jpg';
import leisa2 from '../Assets/leisa2.jpg';
import leisa3 from '../Assets/leisa3.jpg';
import leisa4 from '../Assets/leisa4.jpg';
import leisa5 from '../Assets/leisa5.jpg';
import leisa6 from '../Assets/leisa6.jpg';
import leisa7 from '../Assets/leisa7.jpg';
import leisa8 from '../Assets/leisa8.jpg';

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='about' id='about'>
            <section>
            <h2>Kia ora, Talofa, Malo e lelei! <br></br>I'm Leisa Kalaniuvalu.</h2>
            <p>
                    As a career changer with experience across different companies, ethics, missions, and skill sets, I chose to pursue a career in technology. <br></br>
                    I took a risk to retrain as a developer and have since continued learning in this exciting and innovative field, creating functional, responsive (and beautiful) websites.
                    <br></br> I believe that techonology is the future, I strongly believe that diversity starts with representation, and I am committed to making a positive and sustainable change in our communities. <br></br>
            

            </p>
            <Slider {...settings}>
                <div>
                    <img src={leisa5} alt="Leisa 5" /> 
                </div>
                <div>
                    <img src={leisa2} alt="Leisa 2" />
                </div>
                <div>
                    <img src={leisa3} alt="Leisa 3" />
                </div>
                <div>
                    <img src={leisa4} alt="Leisa 4" />
                </div>
                <div>
                    <img src={leisa1} alt="Leisa 1" />
                </div>
                <div>
                    <img src={leisa6} alt="Leisa 6" />
                </div>
                <div>
                    <img src={leisa7} alt="Leisa 7" />
                </div>
                <div>
                    <img src={leisa8} alt="Leisa 8" />
                </div>
                
            </Slider>

            <p>I have an Arts degree from the University of Auckland double majoring in Politics and Pacific Studies. <br></br>
                My passion project at the moment is building a website for the wonderful Siosiana 'Uheina Kalaniuvalu.
                Siosiana is in her 70s, and has a plethora of knowledge about Tongan culture and arts. <br></br>
                Having a place to hold, store and share her knowledge with the world, has seen a wonderful marriage of my learning journeys.<br></br>
                You can find me when I'm not coding, spending time with my little family, travelling the pacific and watching sports.</p>
            </section>
</div>

        // <section id="about">
        //     <h2>About Me</h2>
        //     <p>Talofa, Malo e lelei, Kia Ora! I'm Leisa. I'm a web developer with a passion for building beautiful and functional websites. My experience includes working with HTML, CSS, JavaScript, and a variety of front-end frameworks.</p>
        // </section>
    );
};

export default About;
