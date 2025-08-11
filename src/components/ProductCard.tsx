"use client";

import { ProductType } from "@/libs/types";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const handleProductType = ({ type, value }: { type: string; value: string }) => {
    (prev) => ({ ...prev, [type]: value });
  };

  return (
    <article className="bg-sky-500">
      {/* Product Image */}
      <figure className="overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-[2/3]">
            <Image src={product.images.gray} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-500" />
          </div>
        </Link>
      </figure>

      {/* Product Info */}
      <figcaption className="p-4 space-y-4">
        {/* Title */}
        <h1 className="font-medium">{product.name}</h1>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">{product.shortDescription}</p>

        {/* Types */}
        <div className="bg-green-500 flex items-start gap-5">
          {/* Sizes */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>

            <div className="bg-rose-500 relative">
              <select name="size" id="size" className="w-[3.2rem] text-xs font-medium border border-gray-300 rounded-md px-2 py-1 appearance-none" onChange={(e) => handleProductType({ type: "size", value: e.target.value })}>
                {product.sizes.map((size) => (
                  <option key={size} value={size} className="text-base">
                    {size.toUpperCase()}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute top-[6px] right-[5px] flex items-center">
                <ChevronDown size={16} />
              </span>
            </div>
          </div>

          {/* Colors*/}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>

            <div className="py-1 flex items-center gap-2">
              {product.colors.map((color) => (
                <button
                  type="button"
                  className={`cursor-pointer border-1 ${productTypes.color === color ? "border-gray-400" : "border-gray-200"} rounded-full p-[1.2px]`}
                  key={color}
                  onClick={() => handleProductType({ type: "color", value: color })}
                >
                  <div className="w-[14px] h-[14px] rounded-full" style={{ backgroundColor: color }} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Price & Cart */}
        <div className="bg-fuchsia-500 flex items-center gap-2">
          {/* Price */}
          <div>andry</div>

          {/* Cart */}
          <div>andry</div>
        </div>
      </figcaption>
    </article>
  );
};

export default ProductCard;
