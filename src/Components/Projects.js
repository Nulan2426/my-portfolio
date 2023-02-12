import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {

    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'SIOSIANA',
            blurb: 'A passion project of beautiful knowledge. HTML, CSS and vanilla JS. Used in this project is SwiperJS a modern touch slider. In future iterations of this website I envision that it will move to React as the plethora of knowledge held by Siosiana means that the Website will require storage and a more stable way to store and call the information.',
            code: 'https://github.com/Nulan2426/siosiana',
            url: 'https://github.com/Nulan2426/siosiana'
        },
        {
            id: 2,
            title: 'LANDING PAGE',
            blurb: 'Landing page about me I made in my first month of coding, something I am proud to showcase as I doubted myself before this so much about career changing. I questioned a lot about what I was doing, the colour scheme I used and as you can probably see by my file upload I did not have a single clue about GitHub (I kind of still do not - what is a readme?) Made with HTML and CSS.',
            code: 'https://github.com/Nulan2426/mission2/blob/main/Mission2.html',
            url: 'https://github.com/Nulan2426/mission2/blob/main/Mission2.html'
        },

        {
            id: 3,
            title: 'Chatbot (in the works)',
            blurb: `Incorporating a chatbot in a dupe Turners Auction page, front page is currently HTML and CSS as focus is working with dialogflow and building some working intents. This ChatBot I am building out is meant to give information to the User about Turners Online Auctions. Information utilised by the Chatbot is from the company's FAQ page.`,
            code: 'https://github.com/Nulan2426/chatbottest',
            url: 'https://github.com/Nulan2426/chatbottest.git'
     
        },
           
        {
            id: 4,
            title: 'PIKIHUIA (up coming Project)',
            blurb: 'A recent commission to build a website for a photography business. I am looking forward to building this website as a lot of the work I have been doing has been frontend development. I am keen to build a beautiful interface of her work, as well as utilising my full stack experience. I envision using React to build this project with reusable components utilising nodejs, expressjs as well as MySQL for backend data, middleware and storage.',
            code: `//Link coming soon! in the meantime click on 'See Project' below that links to the beautiful pictures I look forward to working with!` ,
            url: 'https://www.instagram.com/pikihuiaportraits/'
        },
        {
            id: 5,
            title: `PORTFOLIO`,
            blurb: `Yep, this literal page. Built on the wonderful React, with some cool components. A little hard making something that's all about you talking about yourself. Heaps of fun working on the colour scheme. I don't know why App.css has the contact us styling and I'm still trying to figure out the links *sigh*. The form at the moment is a work in progress while waiting on authentication from sendGrid.`,
            code: ``,
            url: 'https://www.instagram.com/pikihuiaportraits/'
        },
    ])

    return (
     
            <div className='projects'>
                <h2>Projects</h2>
                {projects.map(project => (
                    <div key={project.id} className="project">
                        <h3>{project.title}</h3>
                        <h4>{project.blurb}</h4>
                        <pre>
                            <code>{project.code}</code>
                        </pre>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">See Project</a>
                        </div>
                ))}
                </div>
    );
};

export default Projects;


   // // <section>
        //     <h2>Projects</h2>
            {/* <div className='project'>
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
                </pre> */}
//             </div>
//             </section>
//     );
// };

    
