import React from 'react';
import './ContactInfo.css';
import groupOfPeople from '../../assets/group-of-people.png'; 
import { symbols } from '../../assets/assets';
import Pointer from '../Pointer/Pointer';
import Vector3 from '../Vector 3/Vector3';
import Button2 from '../Button2/Button2'

const ContactInfo = () => {
  return (
    <div class='banner'>
    <div className="contact-info-container">
      <div className="contact-info">
        <img src={groupOfPeople} alt="Group of People" />
        
        <div className="contact-info__details">
          <p><strong>Come and visit us</strong></p> <br/>
          <p>📞 (+91) 9999999999</p><br/>
          <p>✉ testemail@gmail.com</p> <br/>
          <p>📍 837 W. Marshall Lane Marshalltown, IA 50158, Rai-Goa</p>
        </div>
      </div>

      <div className="about-us">
        <Pointer title="About Us"></Pointer>
        
        <h2 className='heading2'>We provide healthy food for your family.</h2>
        <p>
          Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
        </p>
        <p>
          At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
        <Button2 data="More about us"/>
      </div>
    </div>
    </div>
  );
};

export default ContactInfo;