import React from "react";
import Pointer from '../Pointer/Pointer'
import {assets} from '../../assets/assets'
import './Delicious.css'


const Delicious=()=>{
    return(
        <div className="delicious">
            <Pointer title="Best Catering Services"/>
            <h1>Delicious we offer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            <div className="delicious-list">
                {assets.map((item,index)=>{
                        return (
                            <div key={index} className="delicious-list-item">
                                <img src={item.image} alt=""/>
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default Delicious;
