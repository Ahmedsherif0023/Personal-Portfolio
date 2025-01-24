import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fxy8ton', 'template_lve69g7', form.current, {
        publicKey: 'a2l-foL-s9m7vhmoF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
<div className='ffo'>
  <div className='animate__animated animate__zoomIn zzzz'>
    <img src="/static/media/header-img.84bf93eb20488a753440bf83d27db7bb.svg" alt="" />
  </div>
      <form ref={form} onSubmit={sendEmail}>
        <h2>Full name</h2>
        <input className='zzxx' type="text" name="from_name" />
      
        <h2>Email</h2>
        <input className='zzxx' type="email" name="from_email" />
        <h2>Message</h2>
        <textarea name="message" />
        <input className='zxxz' type="submit" value="Send" />
      </form>
</div>
  );
};