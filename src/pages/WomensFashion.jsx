import { useEffect } from "react";
import CategoryBanner from "../components/CategoryBanner";

const WomensFashion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CategoryBanner title={"Women's"} />
    </>
  );
};

export default WomensFashion;
