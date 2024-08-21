import React from 'react';
import './CustomerTestimonials.css';
import sophieImg from '../../assets/Customer1.png';
import mathewImg from '../../assets/Customer2.png';
import andyImg from '../../assets/Customer3.png';

const testimonials = [
  {
    quote: "The best restaurant",
    text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    name: "Sophie Robson",
    location: "Rai, Goa",
    imgSrc: sophieImg
  },
  {
    quote: "Simply delicious",
    text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    name: "Mathew Carmonah",
    location: "Margao, Goa",
    imgSrc: mathewImg
  },
  {
    quote: "One of a kind restaurant",
    text: "The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    name: "Andy Smith",
    location: "Panjim, Goa",
    imgSrc: andyImg
  }
];

const CustomerTestimonials = () => {
  return (
    <div className="testimonials-container">
      <h1>What Our Customers Say</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h3>“{testimonial.quote}”</h3>
            <p>{testimonial.text}</p>
            <div className="customer-info">
              <img src={testimonial.imgSrc} alt={testimonial.name} />
              <div>
                <strong>{testimonial.name}</strong>
                <h7>{testimonial.location}</h7>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;