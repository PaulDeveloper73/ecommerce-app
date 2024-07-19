import { useEffect } from "react";

const WomensFashion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen">
      WomensFashion Loading
    </div>
  );
};

export default WomensFashion;
