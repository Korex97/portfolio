import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/Screenshot (174).png";
import IMG2 from "../../assets/porf.png";
import IMG3 from "../../assets/vidapp.jpg";
import IMG4 from "../../assets/saveLives.jpg";
import IMG5 from "../../assets/employee.png";
import IMG6 from "../../assets/abc.svg";
import IMG7 from "../../assets/Screenshot 2023-02-07 222618.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "A School Information Management System",
    github: "https://github.com/Korex97/School-Information-System",
    demo: "https://schl-info-system.herokuapp.com/"
//     demo: ""
  },
  {
    id: 2,
    image: IMG2,
    title: "Mphunds a Financial Assistant Website Built with Nodejs, ejs, and MongoDB",
    github: "https://github.com/Korex97/mphunds",
    demo: ""
    // demo: "https://mphundss.herokuapp.com/"
  },
  {
    id: 3,
    image: IMG3,
    title: "A Video Chatting Application Built with Nodejs, ejs, socket.io, peerjs and express",
    github: "https://github.com",
    demo: ""
    // demo: "https://vid-chatting.herokuapp.com/"
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
  },
  {
    id: 6,
    image: IMG6,
    title: "Cardify - A fintech platform that has three major system wallet, Exchange and Bills, worked mainly on the bills system",
    github: "",
    demo: "https://app.cardify.co/"
  },
  {
    id: 7,
    image: IMG7,
    title: "Shortleters - A proptech system that deals with the booking, letting of shortlets apartments",
    github: "",
    demo: "https://beta.shortleters.com/"
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
                  {
                    github === ""? (
                      <button className='btn' target="_blank" rel="noreferrer">Private Repo</button>
                    ):(
                      <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                    )
                  }

                  {
                    demo.toLowerCase() === ""?(
                      <button  className='btn btn-primary'>Not yet Deployed</button>
                    ):(
                      <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                    )
                  }
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
