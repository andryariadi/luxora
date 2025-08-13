"use client";

import useCartStore from "@/libs/stores/cartStore";
// import { cartItems } from "@/libs/constant";
import { Trash2 } from "lucide-react";
import Image from "next/image";

const CartProductList = () => {
  const { cart } = useCartStore();

  return (
    <div className="b-amber-500 space-y-5">
      {cart.map((item) => (
        <div className="b-fuchsia-500 flex items-center justify-between" key={item.id + item.selectedSize + item.selectedColor}>
          {/* Image & Product Details */}
          <div className="flex gap-8">
            {/* Product Image */}
            <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
              <Image src={item.images[item.selectedColor]} alt={item.name} fill className="object-contain hover:scale-125 transition-all duration-300" />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>
              </div>

              {/* Price */}
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </div>
          </div>

          {/* Delete Button */}
          <button
            //   onClick={() => removeFromCart(item)}
            className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartProductList;
