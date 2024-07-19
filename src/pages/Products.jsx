import { useEffect, useState } from "react";
import MinHeader from "../components/MinHeader";
import ProductCard from "../components/ProductCard";
import { BASE_URL } from "../components/Utilities";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching the products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-col items-start justify-center min-h-screen mt-20">
      <MinHeader title={"All Products"} />

      <section className="flex flex-wrap gap-x-0 gap-y-10 items-center justify-center w-full">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
