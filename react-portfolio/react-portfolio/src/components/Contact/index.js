import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(idTimeOut);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'default_service',
        'template_gj80xo4',
        refForm.current,
        'HFJRqdleEL7jUGHuS'
      );
      alert('Message successfully sent!');
      window.location.reload(false);
    } catch (error) {
      alert('Message failed to send, please try again');
    }
  };

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm always open to new opportunities and collaborations. If you have a project in
            mind, want to discuss potential job opportunities, or simply want to connect with me, I
            would love to hear from you. Please feel free to reach out using the form below. Let's
            work together and create something remarkable!
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Frank Casseus
          <br />
          Atlanta, Georgia <br />
          <span>FrankCasseus@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[39.8283, -98.5795]} zoom={4}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[33.7490, -84.3880]}>
              <Popup>Frank lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Contact;
