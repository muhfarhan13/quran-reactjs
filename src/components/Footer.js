import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="fixed bottom-0 w-full sm:w-10/12 md:w-6/12 lg:w-6/12 bg-center">
        <footer class="h-16 bg-[#30406E]">
          <div className="flex justify-around py-4">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "bg-white text-[#30406E] rounded-full p-5 -mt-10 active"
                  : "text-white hover:bg-white hover:text-[#30406E] hover:rounded-full hover:p-5 hover:-mt-10 hover:transition hover:ease-in-out hover:delay-[130ms] hover:-translate-y-1"
              }
              to="/info"
            >
              <div>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="fa-2xl"
                ></FontAwesomeIcon>
              </div>
            </NavLink>
            <NavLink
              exact
              className={(navData) =>
                navData.isActive
                  ? "bg-white text-[#30406E] rounded-full p-5 -mt-10 active"
                  : "text-white hover:bg-white hover:text-[#30406E] hover:rounded-full hover:p-5 hover:-mt-10 hover:transition hover:ease-in-out hover:delay-[130ms] hover:-translate-y-1"
              }
              to="/"
            >
              <div>
                <FontAwesomeIcon
                  icon={faHome}
                  className="fa-2xl"
                ></FontAwesomeIcon>
              </div>
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "bg-white text-[#30406E] rounded-full p-5 -mt-10 active"
                  : "text-white hover:bg-white hover:text-[#30406E] hover:rounded-full hover:p-5 hover:-mt-10 hover:transition hover:ease-in-out hover:delay-[130ms] hover:-translate-y-1"
              }
              to="/setting"
            >
              <div>
                <FontAwesomeIcon
                  icon={faGear}
                  className="fa-2xl"
                ></FontAwesomeIcon>
              </div>
            </NavLink>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
