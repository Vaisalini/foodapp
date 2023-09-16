import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div className="menuItem" key={key}>
              <div
                style={{
                  backgroundImage: `url(${menuItem.image})`,
                }}
              ></div>
              <h1>{menuItem.name}</h1>
              <p>${menuItem.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
