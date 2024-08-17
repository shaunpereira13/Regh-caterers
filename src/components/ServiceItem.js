import React from "react";
import serimg from "../assets/service.png";

export const Item1 = {
  name: "We do all kinds of events.",
  image: serimg,
  description:
    "At Regh, we believe that dinning is not just about food, but also about the overall experience.Our staff,renowed for their warmth and dedication, strives to make every visit an unforgettable event.",
  Button: <button>Order now</button>,
};

function ServiceItem1({ image, name, description, Button }) {
  return (
    <div className="ServiceItem1">
      <div style={{ backgroundImage: `url(${Item1.image})` }}></div>
      <div className="content">
        <h1>{Item1.name}</h1>
        <p>{Item1.description}</p>
        <div>{Item1.Button}</div>
      </div>
    </div>
  );
}

export default ServiceItem1;
