import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="flex justify-center items-center h-screen">
      Loading product details... for product
      <p>ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
