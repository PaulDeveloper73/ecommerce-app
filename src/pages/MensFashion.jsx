import { useEffect } from "react";
const MensFashion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen">
      MensFashion loading
    </div>
  );
};

export default MensFashion;
