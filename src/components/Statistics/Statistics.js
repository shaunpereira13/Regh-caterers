import React from 'react';
import './Statistics.css'; 
import Line1 from'../../assets/Line 1.png'
const Statistics = () => {
  return (
    <>
    <div className='lineclass'>
    <img src={Line1} className='line'></img>
    </div>
       
    <div className="statistics">
     <div className="stat-item">
       <h3>508+</h3>
       <p>Events Catered To Across Goa</p>
     </div>
     <div className="stat-item">
       <h3>100%</h3>
       <p>Satisfied Customers</p>
     </div>
     <div className="stat-item">
       <h3>Free</h3>
       <p>Deliveries</p>
     </div>
   </div>
    </>

  );
};

export default Statistics;