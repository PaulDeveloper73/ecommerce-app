/* eslint-disable react/prop-types */
import { CreateContext } from "./Context";
import { useContext, useRef, useEffect, useReducer } from "react";
export const ContextProvider = ({ children }) => {
  const categoryRef = useRef(null);
  let updatedItems;
  let existingItem, itemToRemove;
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        existingItem = state.items.find(
          (item) => item.id === action.payload.id
        );

        if (existingItem) {
          updatedItems = state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
        }

        return {
          ...state,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
          items: updatedItems,
        };

      case "REMOVE_FROM_CART":
        itemToRemove = state.items.find((item) => item.id === action.payload);
        if (!itemToRemove) return state;

        return {
          ...state,
          totalItems: state.totalItems - itemToRemove.quantity,
          totalPrice:
            state.totalPrice - itemToRemove.price * itemToRemove.quantity,
          items: state.items.filter((item) => item.id !== action.payload),
        };

      case "CLEAR_CART":
        return initialState;

      case "INITIALIZE_CART":
        return action.payload;

      case "GET_ITEM":
        return {
          ...state,
          selectedItem: state.items.find(
            (item) => item.id === action.payload.id
          ),
        };

      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  // const cartReducer = (state, action) => {
  //   switch (action.type) {
  //     case "ADD_TO_CART":
  //       const existingItem = state.items.find(
  //         (item) => item.id === action.payload.id
  //       );
  //       let updatedItem;
  //       if (existingItem) {
  //         updatedItem = {
  //           ...existingItem,
  //           quantity: existingItem.quantity + 1,
  //         };
  //       } else {
  //         updatedItem = { ...action.payload, quantity: 1 };
  //       }
  //       return {
  //         ...state,
  //         totalItems: state.totalItems + 1,
  //         totalPrice: state.totalPrice + action.payload.price,
  //         items: [...state.items, updatedItem],
  //       };
  //     case "REMOVE_FROM_CART":
  //       return {
  //         ...state,
  //         totalItems: state.totalItems - 1,
  //         totalPrice:
  //           state.totalPrice - action.payload.price * action.payload.quantity,
  //         items: state.items.filter((item) => item.id !== action.payload.id),
  //       };
  //     case "INITIAL_CART":
  //       return action.payload;
  //     case "CLEAR_CART":
  //       return initialState;
  //     case "GET_ITEM":
  //       return {
  //         ...state,
  //         selectedItem: state.items.find(
  //           (item) => item.id === action.payload.id
  //         ),
  //       };
  //     default:
  //       throw new Error(`Unhandled action type: ${action.type}`);
  //   }
  // };
  const [cartItems, dispatch] = useReducer(
    cartReducer,
    initialState,
    (initial) => {
      const storedItems = localStorage.getItem("cartItems");
      return storedItems ? JSON.parse(storedItems) : initial;
    }
  );
  useEffect(
    () => localStorage.setItem("cartItems", JSON.stringify(cartItems)),
    [cartItems]
  );

  const addToCart = (item) => dispatch({ type: "ADD_TO_CART", payload: item });
  const removeFromCart = (itemId) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const cartNewObject = (newCart) =>
    dispatch({ type: "INITIAL_CART", payload: newCart });
  const getItemById = (itemId) =>
    dispatch({ type: "GET_ITEM", payload: { id: itemId } });

  return (
    <CreateContext.Provider
      value={{
        categoryRef,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getItemById,
        cartNewObject,
      }}
    >
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

const initialState = {
  totalItems: 0,
  totalPrice: 0,
  items: [],
};
