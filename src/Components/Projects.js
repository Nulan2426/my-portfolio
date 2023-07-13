import React, { useState } from 'react';
import '../Styling/Projects.css';

const Projects = () => {

    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'SIOSIANA',
            blurb: 'A passion project of beautiful knowledge. HTML, CSS and vanilla JS. In future iterations of this website I envision that it will move to React as the plethora of knowledge held by Siosiana means that the Website will require storage and a more stable way to store and call the information.',
            code: 'https://github.com/Nulan2426/siosiana',
            url: 'https://github.com/Nulan2426/siosiana'
        },
        {
            id: 2,
            title: 'ORIANA SIVA ACADEMY',
            blurb: `A project for an amazing team in Australia whose dance academy did not have a website. This page was built on React.js. the timeline was was short as they had a launch for registrations 8 days away. Incorporated into the site are two google forms, which in a future iteration will be coded into the actual page itself. There is no backend and is a purely front end development. My learnings from this projects, 1. The amount of work I could accomplish in 8 days was awesome, 2. Incorporating and ensuring my project goes into github earlier to save tears on deployment and lastly, never forget a scroll up button!`,
            code: `https://www.orianasivaacademy.com.au`,
            url: 'https://www.orianasivaacademy.com.au'


          
        },

        {
            id: 3,
            title: 'MY FIRST LANDING PAGE',
            blurb: 'Landing page about me I made in my first month of coding, something I am proud to showcase as I doubted myself before this so much about career changing. I questioned a lot about what I was doing, the colour scheme I used and as you can probably see by my file upload I did not have a single clue about GitHub.  Made with HTML and CSS.',
            code: 'https://github.com/Nulan2426/mission2/blob/main/Mission2.html',
            url: 'https://github.com/Nulan2426/mission2/blob/main/Mission2.html'
     
        },
           
        {
            id: 4,
            title: 'PIKIHUIA (up coming Project)',
            blurb: 'A recent commission to build a website for a photography business. I am looking forward to building this website as a lot of the work I have been doing has been frontend development. I am keen to build a beautiful interface of her work, as well as utilising my full stack experience. I envision using React to build this project with reusable components utilising nodejs, expressjs and MySQL for the backend of this project.',
            code: `//Link coming soon! in the meantime click on 'See Project' below that links to the beautiful pictures I look forward to working with!` ,
            url: 'https://www.instagram.com/pikihuiaportraits/'
        },
        {
            id: 5,
            title: 'SPASIFIK RECRUITMENT (up coming Project)',
            blurb: `A recent commission to build a website for a recruitment business. It was here that I realised the work in the space that I'm in really is lacking in Pasifika talent. Back story, the owner of the business was told that what he is looking for is a 'full stack developer', he had no idea what that was, so went to LinkedIn and typed in full stack developer, and the first pasifika name he came across was me. He reached out, and here we are!.`,
            code: `//Link coming soon! Watch this space!`,
            url: ''
        },
        {
            id: 6,
            title: `PORTFOLIO`,
            blurb: `Built on the wonderful React, with some cool components and fully responsive. I quickly realised in my search for work that a portfolio page would do the talking more than I can. I designed the components hopefully to be easy to read, and easy to maintain in the future as I add more projects and gain more experience that I want to showcase. The form at the bottom of the page works, so please feel free to leave me a message. Feedback is always welcome!`,
            code: `https://github.com/Nulan2426/my-portfolio`,
            url: 'https://github.com/Nulan2426/my-portfolio.git'
        },
    ])

    return (
     
        <div className='projects' id="projects">
            
                <h2>PROJECTS</h2>
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

    
