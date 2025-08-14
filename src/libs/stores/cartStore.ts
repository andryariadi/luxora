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

      // 2. Validasi stok
      if (!selectedVariant || quantity > selectedVariant.stock) {
        //  toast.error(`Maksimal pembelian: ${selectedVariant.stock} item`);
        return { cart: state.cart };
      }

      // 3. Cek apakah item sudah ada di cart
      const variantId = `${product.id}-${product.selectedSize}-${product.selectedColor}`;

      const existingItemIndex = state.cart.findIndex((item) => item.variantId === variantId);

      // 4. Jika sudah ada, update quantity
      if (existingItemIndex !== -1) {
        const newCart = [...state.cart];

        const newQuantity = newCart[existingItemIndex].quantity + quantity;

        // Validasi stok lagi
        if (newQuantity > selectedVariant.stock) {
          // toast.error(`Maksimal pembelian: ${selectedVariant.stock} item`);
          return { cart: state.cart };
        }

        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          quantity: newQuantity,
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
