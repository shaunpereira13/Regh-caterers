import React from "react";
//import { ServiceList } from "../ServiceList";
import "../../styles/service.css";
import ServiceItem1 from "../ServiceItem";
import ServiceItem2 from "../ServiceItem2";

function OurService() {
  return (
    <div className="service">
      <h1 className="serviceTitle"> Our Services </h1>
      <div className="ServiceList">
        <ServiceItem1 />
        <ServiceItem2 />
        <ServiceItem1 />
        <ServiceItem2 />
        {/* {ServiceList.map((serviceitem, key) => {
          return (
            <ServiceItem
              key={key}
              image={serviceitem.image}
              name={serviceitem.name}
              description={serviceitem.description}
              Button={serviceitem.Button}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default OurService;
