import React from 'react'
import HeroBanner from '../HeroBanner/HeroBanner'
import Delicious from '../Delicious/Delicious'
import Chef from '../Chef/Chef'
import Services from '../Services/Services'


function Home() {
  return (
    <div>
   
        <HeroBanner></HeroBanner>
        <Delicious></Delicious>
        <Chef></Chef>
        <Services></Services>
    </div>
  )
}

export default Home