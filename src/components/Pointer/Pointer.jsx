import React from "react";
import { symbols } from "../../assets/assets";
import "./pointer.css";
import Vector3 from "../Vector 3/Vector3";

const Pointer = (props) => {
  return (
    <>
    <div className="pointer">
      <img src={symbols.flame} alt="" />
      <h2>{props.title}</h2>
      
    </div>
    <Vector3></Vector3>
    </>
   
  );
};
export default Pointer;
