import { create } from "zustand";
import { CartStoreActionsType, CartStoreStateType } from "../types";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>((set) => ({
  cart: [],
  hasHydrated: false,
  addToCart: (product) =>
    set((state) => {
      const productExists = state.cart.find((item) => item.id === product.id);

      if (productExists) {
        return {
          cart: state.cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),
}));

export default useCartStore;
