import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faWarning } from "@fortawesome/free-solid-svg-icons";
/* eslint-disable react/prop-types */
const CheckNetwork = ({ isOnline }) => {
  return (
    <>
      {isOnline ? (
        <div className="fixed bottom-0 w-full p-1 text-sm font-normal text-center text-white bg-green-500 shadow-md animate-bounce">
          <span>Your back online!</span>
          <span className="ps-4">
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </div>
      ) : (
        <div className="fixed bottom-0 w-full p-1 text-sm font-normal text-center text-white bg-red-400 shadow-md animate-bounce">
          <span>Your offline, check your internet connnection</span>
          <span className="ps-4">
            <FontAwesomeIcon icon={faWarning} />
          </span>
        </div>
      )}
    </>
  );
};

export default CheckNetwork;
