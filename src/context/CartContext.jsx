import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  total: JSON.parse(localStorage.getItem("totalPrice")) || 0,
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const CartContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const item = action.payload;
      item.quantity = 1;
      item.total = item.quantity * item.current_price[0]["NGN"][0];

      return {
        ...state,
        cart: [...state.cart, item],
      };
    }

    case "DEL": {
      const itemId = action.payload;
      const filteredCart = state.cart.filter((item) => item.id !== itemId.id);

      return {
        ...state,
        cart: filteredCart,
      };
    }

    // case "SORT_CART": {
    //   const sortedCart = state.cart.sort((a, b) => a.cart.name - b.cart.name);

    //   return {
    //     ...state,
    //     cart: sortedCart,
    //   };
    // }

    case "ADD_ITEM_QUANTITY": {
      const item = action.payload;
      const itemIndex = state.cart.findIndex(
        (product) => product.id === item.id
      );

      if (state.cart[itemIndex].quantity > 0) {
        state.cart[itemIndex].quantity += 1;
      }

      state.cart[itemIndex].total =
        state.cart[itemIndex].quantity *
        state.cart[itemIndex].current_price[0]["NGN"][0];

      return {
        ...state,
        cart: state.cart,
      };
    }

    case "REDUCE_ITEM_QUANTITY": {
      const item = action.payload;
      const itemIndex = state.cart.findIndex(
        (product) => product.id === item.id
      );

      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      }

      state.cart[itemIndex].total =
        state.cart[itemIndex].quantity *
        state.cart[itemIndex].current_price[0]["NGN"][0];

      return {
        ...state,
        cart: state.cart,
      };
    }

    case "TOTAL_PRICE": {
      const totalPrice = state.cart.reduce((initVal, currVal) => {
        initVal += currVal.total;

        return initVal;
      }, 0);

      return {
        ...state,
        total: totalPrice,
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        cart: [],
      };
    }

    // case "liked": {
    //   return state.map((cart) => {
    //     if (cart.id === action.id) {
    //       return { ...state };
    //     }
    //   });
    // }

    default:
      throw new Error(`unkwown action type ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("totalPrice", JSON.stringify(state.total));
  }, [state]);

  const addToCart = (item) => {
    dispatch({
      type: "ADD",
      payload: item,
    });
    dispatch({ type: "TOTAL_PRICE" });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "DEL", payload: item });
    dispatch({ type: "TOTAL_PRICE" });
  };

  // const sortCart = () => {
  //   dispatch({ type: "SORT_CART" });
  // };

  const increaseItemQuantity = (item) => {
    dispatch({ type: "ADD_ITEM_QUANTITY", payload: item });
    dispatch({ type: "TOTAL_PRICE" });
  };

  const reduceItemQuantity = (item) => {
    dispatch({ type: "REDUCE_ITEM_QUANTITY", payload: item });
    dispatch({ type: "TOTAL_PRICE" });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // const updatedPrice = (cart) => {
  //   let total = 0;
  //   cart.forEach((product) => (total += product.current_price[0].NGN));

  //   dispatch({
  //     type: "UPDATE",
  //     payload: {
  //       total,
  //     },
  //   });
  // };

  const value = {
    total: state.total,
    cart: state.cart,
    addToCart,
    removeFromCart,
    increaseItemQuantity,
    reduceItemQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("useCart must be used within CartContext ");

  return context;
};

export default useCart;
