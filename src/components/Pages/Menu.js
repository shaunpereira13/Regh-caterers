import React from "react";
import { MenuList } from "../MenuList";
import MenuItem from "../MenuItem";
import "../../styles/menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Our Menu </h1>
      <h2 className="menudescription">
        <p>Take a look at our mouth watering, delicious menu.</p>
      </h2>
      <div className="Buttons">
        <button> All </button> <button> Starters </button>
        <button> Main course </button> <button> Desert </button>
        <button> Salad </button>
      </div>
      <div className="menuList">
        {MenuList.map((menuitem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuitem.image}
              name={menuitem.name}
              description={menuitem.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
