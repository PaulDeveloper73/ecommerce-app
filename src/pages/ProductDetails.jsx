import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleProduct from "../components/SingleProduct";
import { fetchIndividualProduct } from "../components/Utilities";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    if (id === undefined) {
      navigate("/products");
    } else {
      const getSingleProduct = async () => {
        const data = await fetchIndividualProduct(id);
        setProducts([data]);
      };
      getSingleProduct().catch((e) => console.error("We have an error", e));
    }
  }, [id, navigate]);

  return (
    <div className="px-8 ">
      {products.length > 0 ? (
        products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))
      ) : (
        <p>No Product found</p>
      )}
    </div>
  );
};

export default ProductDetails;
