import { createContext, useContext, useState } from "react";

const initials = {
  isLoading: false,
  setIsloading: () => {},
  cart: [],
  setCart: () => {},
};
export const CartContext = createContext(initials);

export function CartContexProvider({ children }) {
  const [isLoading, setIsloading] = useState(false);
  const [cart, setCart] = useState([]);

  const value = {
    isLoading,
    setIsloading,
    cart,
    setCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
}
