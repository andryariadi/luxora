import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div className="inline-flex shrink-0 rounded-full border p-2 border-pink-300/10 bg-pink-400/10">
      <span className="text-pink-500">andry</span>
      <ShoppingCart size={20} className="stroke-pink-700" />
    </div>
  );
}
