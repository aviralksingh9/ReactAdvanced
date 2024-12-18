import React, { useState } from "react";

const items = [
  { id: 1, name: "Apple", price: 1.99 },
  { id: 2, name: "Banana", price: 0.99 },
  { id: 3, name: "Cherry", price: 2.99 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState({});

  const handleCart = (operation, id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (operation === "add") {
        updatedCart[id] = updatedCart[id] ? ++updatedCart[id] : 1;
      }
      if (operation === "remove") {
        if (updatedCart[id] && updatedCart[id] > 0) {
          --updatedCart[id];
        }
      }

      return updatedCart;
    });
  };
  const totalItems = Object.values(cart).reduce((acc,curr)=> acc+curr,0)

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1 style={{ flex: 1, textAlign: "center" }}>Shopping Cart</h1>
        <h2 style={{ marginRight: "10px", fontSize: "35px" }}>
          🛒 {totalItems}
        </h2>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "2px" }}>
                {item.name} 💲{item.price}
              </div>
              <div style={{ margin: "2px" }}>
                <button
                  style={{ margin: "2px" }}
                  onClick={() => handleCart("add", item.id)}
                >
                  +
                </button>
                <button
                  style={{ margin: "2px" }}
                  onClick={() => handleCart("remove", item.id)}
                >
                  -
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
