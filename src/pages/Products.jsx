import { useEffect, useState } from "react";
import MinHeader from "../components/MinHeader";
import ProductCard from "../components/ProductCard";
import { fetchProducts, allowed_Categories } from "../components/Utilities";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const handleActiveCategory = (category) => {
    if (category === "all") setProducts(allProducts);
    else {
      setProducts(
        allProducts.filter((product) => product.category === category)
      );
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setAllProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="flex flex-col items-start justify-center min-h-screen mt-20">
      <MinHeader
        title={"All Products"}
        handleCategory={handleActiveCategory}
        category={allowed_Categories}
      />

      <section className="flex flex-wrap gap-x-0 gap-y-10 items-center justify-center w-full">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
