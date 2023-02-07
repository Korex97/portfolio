import React from 'react';
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div> 
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Flutter</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Vuejs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediatr</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>Angular</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>Spring Boot</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>NodeJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>POSTGRESQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>



          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience;