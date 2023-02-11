import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div className='projects'>
                <div className='project'>
<h3>Project Siosiana</h3>
                    <pre>
                        <code>
                            {'//code snippet coming here for Siosiana'}
                        </code>

                    </pre>
                </div>
                <div className='project'>
                    <h3>Project Chatbot</h3>
                    <pre>
                        <code> {'//code snippet here Chatbot'}</code>
                    </pre>
                </div>
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
