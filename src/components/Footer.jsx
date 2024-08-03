import CheckNetwork from "./CheckNetwork";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showNetworkStatus, setShowNetworkStatus] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowNetworkStatus(true);

      // Set a timeout to hide the network status after 3000ms
      const timer = setTimeout(() => {
        setShowNetworkStatus(false);
        window.location.reload();
      }, 3000);

      // Clean up the timeout if the component is unmounted or if the state changes
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowNetworkStatus(true); // Show the network status immediately when offline
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="relative">
      <div className="h-20"></div>
      <section className="fixed bottom-0 w-full p-2 text-sm font-light text-center bg-indigo-100">
        <p>@2024 Copyright Reserved. IT Solutions</p>
      </section>

      {/* Conditionally render the CheckNetwork component based on showNetworkStatus */}
      {showNetworkStatus && <CheckNetwork isOnline={isOnline} />}
    </div>
  );
};

export default Footer;
