import React, { useRef } from 'react';

import emailjs from "emailjs-com"

import { Container } from './styles';

const Contact: React.FC = () => {

  const form = useRef(null);
  let formValue: string = !form.current ? '' : form.current;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_b9zwlw4', 'template_zt8m0qf', formValue, 'user_3NnyRPZu3hS6hAmo7Piyb')
      .then((result: any) => {
          console.log(result.text);
      }, (error: any) => {
          console.log(error.text);
      });
  }

  return (
    <Container className="contact">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </Container>
  );
};

export default Contact;
