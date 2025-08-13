import z from "zod";
import { paymentFormSchema, shippingFormSchema } from "../zod/validation";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
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
