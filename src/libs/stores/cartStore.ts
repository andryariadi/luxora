import { create } from "zustand";
import { CartStoreActionsType, CartStoreStateType } from "../types";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>((set) => ({
  cart: [],
  hasHydrated: false,
  addToCart: (product) =>
    set((state) => {
      console.log({ state, product }, "<---addToCart");

      const existingIndex = state.cart.findIndex((p) => p.id === product.id && p.selectedSize === product.selectedSize && p.selectedColor === product.selectedColor);

      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];

        updatedCart[existingIndex].quantity += product.quantity || 1;

        return { cart: updatedCart };
      }

      return {
        cart: [
          ...state.cart,
          {
            ...product,
            quantity: product.quantity || 1,
            selectedSize: product.selectedSize,
            selectedColor: product.selectedColor,
          },
        ],
      };
    }),
}));

export default useCartStore;
