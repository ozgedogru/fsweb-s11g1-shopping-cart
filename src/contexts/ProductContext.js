import { createContext } from "react";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { data } from "../data";

export const ProductContext = createContext();

export default function ProductContextProvider(props) {
  const [products, setProducts] = useState(data);

  const { cart, setCart } = useContext(CartContext);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (orderInd) => {
    const newCart = cart.filter((item, i) => i !== orderInd);
    setCart(newCart);
  };

  return (
    <ProductContext.Provider value={{ products, addItem, removeItem }}>
      {props.children}
    </ProductContext.Provider>
  );
}
