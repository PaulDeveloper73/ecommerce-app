import { useEffect } from "react";
import CategoryBanner from "../components/CategoryBanner";
const MensFashion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CategoryBanner title={"Men's"} />
    </>
  );
};

export default MensFashion;
