import { faPhone, faDollar, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faShare, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeveloperPic from "../assets/Kisakye-Paul-Developer.png";

const ContactPerson = () => {
  return (
    <>
      <div className="flex items-center justify-start space-x-6 ">
        <span>
          <img src={DeveloperPic} alt="user" className="rounded-full size-16" />
        </span>
        <span>
          <p className="text-sm font-light text-slate-500">
            Have a Question? Ask a Specialist
          </p>
          <span className="flex flex-wrap">
            <a href="tel:+256774185964">
              <span className="font-semibold text-slate-600">
                (+256) 774 185 964
              </span>
            </a>
            <a href="tel:+256774185964">
              <span className="p-1 text-sm text-blue-600 rounded-md ps-2 ms-4 hover:bg-blue-100 hover:cursor-pointer">
                <FontAwesomeIcon icon={faPhone} className="pe-2" />
                Start Live Chat
              </span>
            </a>
          </span>
        </span>
      </div>
      <div className="flex flex-col sm:grid sm:gap-y-2 sm:grid-cols-2">
        <div className="flex items-center justify-start space-x-4">
          <span className="p-4 py-2 border rounded-full cursor-pointer hover:bg-slate-200">
            <FontAwesomeIcon icon={faDollar} className="text-slate-600" />
          </span>
          <span>
            <h4 className="text-xs font-bold text-slate-600">Low Prices</h4>
            <p className="text-slate-600 text-[13px] font-light text-balance">
              Price match guarantee
            </p>
          </span>
        </div>
        <div className="flex items-center justify-start space-x-4">
          <span className="p-3 py-2 border rounded-full cursor-pointer hover:bg-slate-200">
            <FontAwesomeIcon icon={faCheck} className="text-slate-600" />
          </span>
          <span>
            <h4 className="text-xs font-bold text-slate-600">
              Guaranteed Fitment
            </h4>
            <p className="text-slate-600 text-[13px] font-light text-balance">
              Always the quality products
            </p>
          </span>
        </div>
        <div className="flex items-center justify-start space-x-4">
          <span className="p-3 py-2 border rounded-full cursor-pointer hover:bg-slate-200">
            <FontAwesomeIcon icon={faHeadphones} className="text-slate-600" />
          </span>
          <span>
            <h4 className="text-xs font-bold text-slate-600">
              In-House Experts
            </h4>
            <p className="text-slate-600 text-[13px] font-light text-balance">
              We know our products
            </p>
          </span>
        </div>
        <div className="flex items-center justify-start space-x-4">
          <span className="p-3 py-2 border rounded-full cursor-pointer hover:bg-slate-200">
            <FontAwesomeIcon icon={faShare} className="text-slate-600" />
          </span>
          <span>
            <h4 className="text-xs font-bold text-slate-600">Easy Returns</h4>
            <p className="text-slate-600 text-[13px] font-light text-balance">
              Quick & Hassle Free
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactPerson;
