import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomeNavLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 font-sans cursor-pointer list-none";

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-green`
          : `${className} ${linkStyles}`
      }
    >
      {children}
    </NavLink>
  );
};

const CustomeLink = ({ className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 cursor-pointer list-none";

  return <NavLink className={`${className} ${linkStyles}`}>{children}</NavLink>;
};

const Badges = ({ color, children }) => {
  return (
    <div
      className={` w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center items-center text-white`}
    >
      {children}
    </div>
  );
};

export { CustomeLink, CustomeNavLink, Badges };

CustomeNavLink.propTypes = {
  href: PropTypes.isRequired,
  className: PropTypes.isRequired,
  children: PropTypes.isRequired,
};

CustomeNavLink.propTypes = {
  className: PropTypes.isRequired,
  children: PropTypes.isRequired,
};

CustomeLink.propTypes = {
  color: PropTypes.isRequired,
  children: PropTypes.isRequired,
};
