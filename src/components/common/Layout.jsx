import React from "react";
import { Header } from "./Header";
import PropTypes from "prop-types";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "180vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.isRequired,
};
