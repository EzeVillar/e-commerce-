import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({ items }) => {
  return (
    <div className="card">
      {items.map((element) => {
        return (
          <div className="center">
            <Item className="column" key={element.id} element={element} />
          </div>
        )
      })}
    </div>
  );
};

export default ItemList;
