import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/Screenshot (174).png";
import IMG2 from "../../assets/porf.png";
import IMG3 from "../../assets/vidapp.jpg";
import IMG4 from "../../assets/saveLives.jpg";
import IMG5 from "../../assets/employee.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "A School Information Management System",
    github: "https://github.com/Korex97/School-Information-System",
    demo: "https://schl-info-system.herokuapp.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Mphunds a Financial Assistant Website Built with Nodejs, ejs, and MongoDB",
    github: "https://github.com/Korex97/mphunds",
    demo: "https://mphundss.herokuapp.com/"
  },
  {
    id: 3,
    image: IMG3,
    title: "A Video Chatting Application Built with Nodejs, ejs, socket.io, peerjs and express",
    github: "https://github.com",
    demo: "https://vid-chatting.herokuapp.com/"
  },
  {
    id: 4,
    image: IMG4,
    title: "An Emergency Mobile App Built with Flutter",
    github: "https://github.com/Korex97/save_a_life",
    demo: ""
  },
  {
    id: 5,
    image: IMG5,
    title: "An Employee Management System built with SpringBoot(Java) and AngularJs",
    github: "https://github.com/Korex97/employeeMangementSystem",
    demo: ""
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt="image1" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href="#" className='btn btn-primary'>Not yet Deployed</a>

                  {/* {
                    demo.toLowerCase() === ""?(
                      <a href="#" className='btn btn-primary'>Not yet Deployed</a>
                    ):(
                      <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                    )
                  } */}
                </div> 
              </article>
            )
          })
        }
      </div>

      
    </section>
  )
}

export default Portfolio