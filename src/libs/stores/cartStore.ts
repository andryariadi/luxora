import { create } from "zustand";
import { CartItemType, CartStoreActionsType, CartStoreStateType } from "../types";
import { toast } from "react-toastify";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (product) => {
        console.log({ product }, "<---addToCart");

        const quantity = product.quantity || 1;

        return set((state) => {
          // 1. Cari variant yang sesuai di data produk:
          const selectedVariant = product.variants?.find((v) => v.size === product.selectedSize && v.color === product.selectedColor);

          console.log({ selectedVariant }, "<---addToCart2");

          // 2. Validasi stok:
          if (selectedVariant?.stock === 0) {
            toast.error("Product out of stock");
            return { cart: state.cart };
          }

          if (!selectedVariant || quantity > selectedVariant.stock) {
            toast.error(`Maximum product purchase is ${selectedVariant?.stock}`);
            return { cart: state.cart };
          }

          // 3. Cek apakah item sudah ada di cart:
          const variantId = `${product.id}-${product.selectedSize}-${product.selectedColor}`;

          const existingItemIndex = state.cart.findIndex((item) => item.variantId === variantId);

          // Jika sudah ada, update quantity dan remainingStock:
          if (existingItemIndex !== -1) {
            const newCart = [...state.cart];

            const newQuantity = newCart[existingItemIndex].quantity + quantity;

            const remainingStock = newCart[existingItemIndex].remainingStock ?? 0;

            // Validasi stok (remainingStock) lagi:
            if (quantity > remainingStock) {
              if (remainingStock === 0) {
                toast.error("Product out of stock2");
                return { cart: state.cart };
              }
              toast.error(`Maximum product purchase is ${remainingStock} item`);

              return { cart: state.cart };
            }

            newCart[existingItemIndex] = {
              ...newCart[existingItemIndex],
              quantity: newQuantity,
              remainingStock: remainingStock - quantity,
            };

            toast.success(`Product added to cart`);

            return { cart: newCart };
          }

          toast.success(`Product ${product.name} added to cart`);

          // 4. Jika item baru:
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
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }), // Optional: only persist the cart
    }
  )
);

export default useCartStore;
