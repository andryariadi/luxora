import { create } from "zustand";
import { CartItemType, CartStoreActionsType, CartStoreStateType } from "../types";
import { toast } from "react-toastify";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>((set) => ({
  cart: [],
  hasHydrated: false,
  addToCart: (product) => {
    console.log({ product }, "<---addToCart");

    const quantity = product.quantity || 1;

    return set((state) => {
      // 1. Cari variant yang sesuai di data produk
      const selectedVariant = product.variants?.find((v) => v.size === product.selectedSize && v.color === product.selectedColor);

      console.log({ selectedVariant }, "<---addToCart2");

      // 2. Validasi stok
      if (!selectedVariant || quantity > selectedVariant.stock) {
        console.log(`Maksimal pembelian: ${selectedVariant?.stock} item1`);
        return { cart: state.cart };
      }

      // 3. Cek apakah item sudah ada di cart
      const variantId = `${product.id}-${product.selectedSize}-${product.selectedColor}`;

      const existingItemIndex = state.cart.findIndex((item) => item.variantId === variantId);

      // 4. Jika sudah ada, update quantity
      if (existingItemIndex !== -1) {
        const newCart = [...state.cart];

        const newQuantity = newCart[existingItemIndex].quantity + quantity;

        console.log(newCart[existingItemIndex], "<---addToCart3");
        console.log(newCart[existingItemIndex].remainingStock, "<---addToCart4");

        // Validasi stok lagi
        if (quantity > newCart[existingItemIndex].remainingStock) {
          console.log(`Maksimal pembelian: ${selectedVariant.stock} item2`);
          return { cart: state.cart };
        }

        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          quantity: newQuantity,
          remainingStock: newCart[existingItemIndex].remainingStock - quantity,
        };
        return { cart: newCart };
      }

      // 5. Jika item baru
      return {
        cart: [
          ...state.cart,
          {
            ...product,
            variantId,
            quantity,
            selectedColor: product.selectedColor,
            selectedSize: product.selectedSize,
            variantPrice: selectedVariant.price,
            maxStock: selectedVariant.stock,
            remainingStock: selectedVariant.stock - quantity,
          },
        ],
      };
    });
  },

  removeFromCart: (product: CartItemType) =>
    set((state) => ({
      cart: state.cart.filter((item) => !(item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor)),
    })),
}));

export default useCartStore;
