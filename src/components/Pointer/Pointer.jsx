import React from "react";
import { symbols } from "../../assets/assets";
import "./pointer.css";

const Pointer = (props) => {
  return (
    <div className="pointer">
      <img src={symbols.flame} alt="" />
      <h2>{props.title}</h2>
    </div>
  );
};
export default Pointer;
