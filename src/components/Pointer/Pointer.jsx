import React from "react";
import { symbols } from "../../assets/assets";
import "./pointer.css";
import Vector3 from "../Vector 3/Vector3";

const Pointer = (props) => {
  return (
    <div>
      <div className="pointer">
        <img src={symbols.flame} alt="" />
        <h2 className="pointer-h2">{props.title}</h2>
      </div>
      <Vector3/>
    </div>
  );
};
export default Pointer;
