import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex"}}>
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
