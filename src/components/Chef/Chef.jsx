import React from "react";
import {symbols} from '../../assets/assets'
import Pointer from "../Pointer/Pointer";

import './chef.css'

const Chef=()=>{
    return(
        <div className="chef">
            <img src={symbols.chef} alt="" />
            <div className="desc">
                <Pointer title="Best Chef Service"/>
                <h1>Chef at Catering</h1>
                <p>Our chefs are highly skilled and experienced in preparing a wide variety of cuisines Experience exceptional dining with our top-tier chef services, where culinary excellence meets personalized touch. Our team of expert chefs is dedicated to crafting exquisite menus that cater to your unique event needs.</p>
                <ul>
                    <li>Seamless Service</li>
                    <li>Professional Presentation</li>
                    <li>Exceptional Quality</li>
                </ul>

            </div>
        </div>
    )
}
export default Chef;
