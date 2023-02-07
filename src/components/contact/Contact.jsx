import React from 'react';
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0hpc3us', 'template_tw1nhuk', form.current, 'ns7zrfII77b1xyiSS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();

  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>egbeolowoakorede97@gmail.com</h5>
            <a href="mailto:egbeolowoakorede97@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=+2348115850688" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>

        {/* Contact OPtions */}

        <form ref={form} onSubmit={e => sendEmail(e)}>
          <input type="text" name='name' placeholder='Your Full Name'  required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className="btn btn-primary">Send A Message</button>
        </form>
      </div>
   </section>
  )
}

export default Contact