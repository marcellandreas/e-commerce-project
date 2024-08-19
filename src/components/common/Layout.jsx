import React from "react";
import { Header } from "./Header";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "180vh" }}>{children}</main>
      <h2>footer</h2>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.isRequired,
};
