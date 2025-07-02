import React from 'react';
import './Contact.css';
import { ReactComponent as PhoneIcon } from './phone.svg';
import { ReactComponent as MailIcon } from './mail.svg';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-wrapper">

        <div className="contact-box">
          <PhoneIcon className="icon" />
          <p>416-992-5585</p>
        </div>
        
        <div className="contact-box">
          <MailIcon className="icon" />
          <p>idamusic.gta@gmail.com</p>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;
