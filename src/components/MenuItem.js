import React from "react";

function MenuItem({ image, name, description }) {
  return (
    <div className="MenuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default MenuItem;
