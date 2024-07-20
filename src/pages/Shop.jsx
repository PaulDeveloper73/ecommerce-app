import { useNavigate } from "react-router-dom";
import MinHeader from "../components/MinHeader";
import { useEffect } from "react";

const Shop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="flex items-start justify-center min-h-screen mt-20">
      <MinHeader title={"Latest Products"} />
    </div>
  );
};

export default Shop;
