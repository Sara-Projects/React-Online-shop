import React, { useContext, useState } from "react";
const CartContext = React.createContext();

export const ShoppingCartProvider = ({ children }) => {
 const [cartItems, setCartItems] = useState([]);
 // Function to add an item to the cart
 const addItemToCart = (item, quantity) => {
  let indexFind = cartItems.findIndex((product) => product.id === item.id);
  if (indexFind === -1) {
   item.count = quantity;
   setCartItems([...cartItems, item]);
  } else if (item.count !== quantity) {
   cartItems[indexFind].count = quantity;
   setCartItems([...cartItems]);
  }
 };

 // Function to remove an item from the cart
 const removeItemFromCart = (itemId) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
  setCartItems(updatedCartItems);
 };

 // Calculate the total cart amount
 const calculateTotalAmount = () => {
  return cartItems.reduce((total, item) => total + item.price * item.count, 0);
 };

 return (
  <CartContext.Provider
   value={{
    removeItemFromCart,
    addItemToCart,
    calculateTotalAmount,
    cartItems,
   }}
  >
   {children}
  </CartContext.Provider>
 );
};

export const useCartContext = () => {
 return useContext(CartContext);
};
