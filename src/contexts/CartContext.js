import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
