import z from "zod";
import { paymentFormSchema, shippingFormSchema } from "../zod/validation";

export type variantsProduct = {
  size: string;
  color: string;
  stock: number;
  price: number;
};

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  basePrice: number;
  availableSizes: string[];
  availableColors: string[];
  avaliableimages: Record<string, string>;
  variants?: variantsProduct[];
};

export type CartItemType = ProductType & {
  variantId: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  variantPrice?: number;
  maxStock?: number;
  remainingStock?: number;
};

export type CartStoreStateType = {
  cart: CartItemType[];
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  //   removeFromCart: (product: CartItemType) => void;
  //   clearCart: () => void;
};

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;
