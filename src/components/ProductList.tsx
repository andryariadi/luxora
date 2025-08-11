import { products } from "@/libs/constant";
import ProductCard from "./ProductCard";
import Categories from "./Categories";

const ProductList = () => {
  return (
    <section className="b-fuchsia-500 space-y-5">
      {/* Category */}
      <Categories />

      {/* Filter */}

      {/* Product List */}
      <div className="b-rose-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Products */}
    </section>
  );
};

export default ProductList;
