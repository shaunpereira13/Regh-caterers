import React from "react";
import './Services.css'
import { symbols,services } from "../../assets/assets";
import Pointer from "../Pointer/Pointer";
const Services=()=>{
    return(
        <div className="services">
            <Pointer title="Services we offer"/>
            <h1>Services for events</h1>
            <div className="services-list">
                {services.map((item,index)=>{
                        return (
                            <div key={index} className="services-list-item">
                                <img src={item.image} alt=""/>
                                <p className="services-list-item-name">{item.name}</p>
                                <p className="services-list-item-p">{item.description}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default Services