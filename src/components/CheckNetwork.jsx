import { useEffect } from "react";

const CheckNetwork = () => {
  useEffect(() => {
    const handleOnline = () => {
      console.log("online");
      window.location.reload();
    };
    const handleOffline = () => {
      console.log("offline");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <div>CheckNetwork</div>;
};

export default CheckNetwork;
