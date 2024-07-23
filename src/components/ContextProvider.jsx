/* eslint-disable react/prop-types */
import { CreateContext } from "./Context";
import { useContext, useRef, useState } from "react";
export const ContextProvider = ({ children }) => {
  const categoryRef = useRef(null);
  const [cartItems, setCartItems] = useState([shoppingList]);

  return (
    <CreateContext.Provider value={categoryRef}>
      {children}
    </CreateContext.Provider>
  );
};
export const UseCreateContext = () => {
  const context = useContext(CreateContext);

  if (context === undefined) {
    throw new Error("UseCreateContext must be used within a ContextProvider");
  }

  return context;
};

const shoppingList = {
  totalItems: 0,
  totalPrice: 0,
  items: [],
};
