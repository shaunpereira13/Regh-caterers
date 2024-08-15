import React from 'react'
import { symbols } from '../../assets/assets'
import './InfoBanner.css'

function InfoBanner() {
  return (
    <>
        <div className='Banner'>
            <div className='content'>
                <h2>A little information for our valuable guest</h2>
                <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                <div className='info-card'>
                  <h2>Free</h2>
                  <p>Delivery</p>
                </div>
                <div className="info-card">
                  <h2>1995</h2>
                  <p>Founded</p>
                </div>
                <div className="info-card">
                  <h2>65+</h2>
                  <p>Staff Members</p>
                </div>
                <div className="info-card">
                  <h2>100%</h2>
                  <p>Satisfied Customers</p>
                </div>
              </div>
              <div className='image'>
                  <img src={symbols.foods}></img>
              </div>
            </div>

    </>
  )
}

export default InfoBanner