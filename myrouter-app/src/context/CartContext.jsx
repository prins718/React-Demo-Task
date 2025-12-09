import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
 
  const [cart, setCart] = useState([]);

 
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  
  const removeFromCart = (id) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index === -1) return prev;
      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
  };

 
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
