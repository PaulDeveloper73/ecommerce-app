import { CreateContext } from "./Context";
import { useContext, useRef } from "react";
export const ContextProvider = ({ children }) => {
  const categoryRef = useRef(null);
  return (
    <CreateContext.Provider value={categoryRef}>
      {children}
    </CreateContext.Provider>
  );
};
export const useCreateContext = () => {
  const context = useContext(CreateContext);

  if (context === undefined) {
    throw new Error("useCreateContext must be used within a ContextProvider");
  }

  return context;
};
