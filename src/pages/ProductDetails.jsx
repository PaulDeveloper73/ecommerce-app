import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleProduct from "../components/SingleProduct";
import { fetchIndividualProduct } from "../components/Utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);

    if (id === undefined) {
      navigate("/products");
    } else {
      setLoading(true);
      const getSingleProduct = async () => {
        const data = await fetchIndividualProduct(id);
        setProducts([data]);
        setLoading(false);
      };
      getSingleProduct().catch((e) => console.error("We have an error", e));
    }
  }, [id, navigate]);

  return (
    <div className="px-8 ">
      {loading ? (
        <div className="text-2xl text-center flex justify-center items-center h-screen">
          <FontAwesomeIcon
            icon={faSpinner}
            className="size-8 text-blue-600 animate-spin"
          />
        </div>
      ) : products.length > 0 ? (
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
