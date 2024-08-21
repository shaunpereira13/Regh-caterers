import React from 'react'
import HeroBanner from '../HeroBanner/HeroBanner'
import Delicious from '../Delicious/Delicious'
import Chef from '../Chef/Chef'
import Services from '../Services/Services'
import ContactInfo from '../ContactInfo/ContactInfo'
import CustomerTestimonials from '../CustomerTestimonials/CustomerTestimonials'
import Statistics from '../Statistics/Statistics'


function Home() {
  return (
    <div>
   
        <HeroBanner></HeroBanner>
        <Delicious></Delicious>
        <Chef></Chef>
        <Services></Services>
        <ContactInfo></ContactInfo>
        <Statistics></Statistics>
        <CustomerTestimonials></CustomerTestimonials>
    </div>
  )
}

export default Home