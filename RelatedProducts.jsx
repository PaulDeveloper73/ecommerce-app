/* eslint-disable react/prop-types */
import ProductCard from "./src/components/ProductCard";
import { fetchCategoryProducts } from "./src/components/Utilities";
import { useState, useEffect } from "react";
const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategoryProducts = async () => {
      const data = await fetchCategoryProducts(category);
      setProducts(data);
    };
    getCategoryProducts().catch((e) => console.error("We have an error", e));
  }, [category]);

  return (
    <div className="px-10">
      <h2 className="py-2 text-xl font-medium border-b text-slate-800 text-start">
        Related Products
      </h2>
      <section className="grid w-full grid-cols-2 mt-2 place-content-start sm:justify-start sm:items-center sm:flex-wrap sm:flex gap-x-2 gap-y-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default RelatedProducts;
