"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-2 -right-3 bg-amber-400 w-4 h-4 rounded-full text-gray-600 text-xs font-medium flex items-center justify-center  ">0</span>
    </Link>
  );
};

export default ShoppingCartIcon;
