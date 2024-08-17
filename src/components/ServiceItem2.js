import React from "react";
import serimg from "../assets/service.png";

export const Item2 = {
  name: "We do all kinds of events.",
  image: serimg,
  description:
    "At Regh, we believe that dinning is not just about food, but also about the overall experience.Our staff,renowed for their warmth and dedication, strives to make every visit an unforgettable event.",
  Button: <button>Order now</button>,
};

function ServiceItem2({ image, name, description, Button }) {
  return (
    <div className="ServiceItem2">
      <div style={{ backgroundImage: `url(${Item2.image})` }}></div>
      <div className="content">
        <h1>{Item2.name}</h1>
        <p>{Item2.description}</p>
        <div>{Item2.Button}</div>
      </div>
    </div>
  );
}

export default ServiceItem2;
