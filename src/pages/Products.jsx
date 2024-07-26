import { useEffect, useState } from "react";
import MinHeader from "../components/MinHeader";
import ProductCard from "../components/ProductCard";
import { UseCreateContext } from "../components/ContextProvider";

import {
  fetchProducts,
  allowed_Categories,
  fetchCategoryProducts,
} from "../components/Utilities";
import { useParams } from "react-router-dom";
import MensFashion from "./MensFashion";
import WomensFashion from "./WomensFashion";

const Products = () => {
  const { productcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const banner =
    productcategory === "men's clothing" ? <MensFashion /> : <WomensFashion />;

  const handleActiveCategory = (category) => {
    if (category === "all") setProducts(allProducts);
    else {
      setProducts(
        allProducts.filter((product) => product.category === category)
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productcategory === undefined) {
      const getProducts = async () => {
        const data = await fetchProducts();
        setProducts(data);
        setAllProducts(data);
        console.log(data);
      };
      getProducts().catch((e) => console.error("We have an error", e));
    } else {
      const getCategoryProducts = async () => {
        const data = await fetchCategoryProducts(productcategory);
        setProducts(data);
      };
      getCategoryProducts().catch((e) => console.error("We have an error", e));
    }
  }, [productcategory]);
  const { cartItems } = UseCreateContext();
  console.log(cartItems);

  return (
    <div className="flex flex-col items-start justify-center mt-20">
      {productcategory === undefined ? (
        <MinHeader
          title={"All Products"}
          handleCategory={handleActiveCategory}
          category={allowed_Categories}
        />
      ) : (
        banner
      )}

      <section className="grid w-full grid-cols-2 place-content-around sm:justify-center sm:items-center sm:flex-wrap sm:flex gap-x-2 gap-y-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
