import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div className='projects'>
            <div className='project'>
                    <h3>Project Siosiana</h3>
                    <h4>A passion project of beautiful knowledge. This site started as pet project to futher my HTML, CSS and vanilla JS skills. 
                        Upon sharing the set up with Siosiana it became apparent that the need for this website superceeded even my own expectations as it became clear, 
                        that the knowledge that Siosiana holds is not recorded anywhere, outside of her workshops and fantastic verbal storytelling. 
                        I envision that in the future, I will build an API, and will move this to React and the cloud where I 
                        will utilise calling the mass writings, and images available of Tongan koloa (goods, wealth, possessions)
                        into a more stable platform capable of handling the vast amount of data that is currently held by Siosiana. <br></br>
                        Made using HTML, CSS and vanilla JavaScript.
                    </h4>
                    <pre>
                        <code>
                            {'//code snippet coming here for Siosiana'}
                        </code>

                    </pre>
                </div>
                <div className='project'>
                    <h3>Project Pikihuia Photography</h3>
                    <h4>Some code for Gjertine's wonderful Photography business. Gjertine based in West Auckland came to me with the problem of having her work
                        hosted on a site that doesn't allow for the flexibility of the work she wanted to show, and accessibility of people being able to reach her.
                      <br></br>  Made using ReactJS.
                    </h4>
                  
                    <pre>
                        <code> {'//code snippet here Pikihuia'}</code>
                    </pre>
                </div>
            </div>
            <div className='project'>
                <h3>Project Chatbot</h3>
                <h4>incorporating a chatbot in a dupe Turners Auction page
                  <br></br>  Made using HTML and CSS.
                </h4>
                <pre>
                    <code> {'//code snippet here for Chatbot'}</code>
                </pre>
            </div>
            <div className='project'>
                <h3>Project Incoming</h3>
                <pre>
                    <code> {'//code snippet here Incoming'}</code>
                </pre>
            </div>
            </section>
    );
};

    
export default Projects;
