import { useState } from "react";
import React from "react";
import "./FoodOrder.css";
export default function FoodOrderingApp() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "French Fries",
      description: "Freshly deep-fried potatoes  cut into various thin strips",
      price: 100,
      image: "https://i.imgur.com/cDZ1Z9p.jpeg",
    },
    {
      id: 2,
      name: "Classic Pizza",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
      price: 500,
      image: "https://i.imgur.com/eTmWoAN.png",
    },
    {
      id: 3,
      name: "Pasta Carbonara",
      description: "Traditional pasta dish with egg, and Parmesan cheese.",
      price: 350,
      image: "https://i.imgur.com/weHI4fQ.jpeg",
    },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="food-ordering-app">
      <h2 className="menu-header">Menu</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img className="menu-item-image" src={item.image} alt={item.name} />
            <div className="menu-item-details">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">{item.price}Rs</p>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="cart-header">Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 && (
          <p className="empty-cart-message">Your cart is empty.</p>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image-container">
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">Rs{item.price}</p>
              <button
                className="remove-from-cart-button"
                onClick={() => removeFromCart(item)}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
        {cartItems.length > 0 && (
          <div className="cart-total">
            <p className="cart-total-label">Total:</p>
            <p className="cart-total-price">Rs{calculateTotalPrice()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
