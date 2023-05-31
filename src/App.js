import "./App.css";
import React, { useState } from "react";
import Items from "./components/item/items";
import AddItem from "./components/addItem/addItem";
import Total from "./components/total/total";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, product: "Pen", price: 2, quantity: 1 },
    { id: 2, product: "Book", price: 10, quantity: 1 },
  ]);

  const incQuant = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: parseInt(item.quantity) + 1,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };
  const decQuant = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: parseInt(item.quantity) - 1,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const addItem = (item) => {
    const updatedItems = [...items];
    item.id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    updatedItems.push(item);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <h1>Product List React App</h1>
      <div className="table">
        <Items inc={incQuant} dec={decQuant} items={items} del={deleteItem} />
        <AddItem add={addItem} />
        <Total items={items} />
      </div>
    </div>
  );
};

export default App;
