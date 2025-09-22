"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  PropsWithChildren,
} from "react";
import { CartState, CartAction } from "./types";
import { cartReducer } from "./cart-reducer";
import { Product } from "@/data";

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

interface CartProviderType extends PropsWithChildren {}

export const CartProvider: React.FC<CartProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Helper functions para facilitar el uso
  const addToCart = (product: Product, quantity: number) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
  };

  const removeFromCart = (slug: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: slug });
  };

  const updateQuantity = (slug: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { slug, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const value = {
    state,
    dispatch,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
