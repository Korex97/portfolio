import React from 'react';
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();
  const notify = (message) => {
    toast(message);
  } 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0hpc3us', 'template_tw1nhuk', form.current, 'ns7zrfII77b1xyiSS')
      .then((result) => {
        notify("Message sent");
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();

  };


  return (
    <>
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
            <a href="https://api.whatsapp.com/send?phone=2348115850688&text=%F0%9F%93%9E%20Hello%20Akorede%2C%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20recently%20came%20across%20your%20impressive%20portfolio%20and%20I%27m%20truly%20impressed%20by%20your%20skills%20as%20a%20full%20stack%20developer.%20%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%0A%0A%F0%9F%8C%9F%20I%20have%20a%20project%20idea%20in%20mind%20that%20requires%20a%20dynamic%20and%20efficient%20web%20application%2C%20and%20after%20reviewing%20your%20work%2C%20I%20believe%20you%20would%20be%20the%20perfect%20fit%20to%20bring%20my%20vision%20to%20life.%0A%0A%F0%9F%99%8F%20Thank%20you%20for%20your%20time%2C%20and%20I%20look%20forward%20to%20hearing%20from%20you%20soon!" target="_blank" rel="noreferrer">Send a Message</a>
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
    </>
  )
}

export default Contact