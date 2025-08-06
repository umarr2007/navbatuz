import React from "react";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}

    </div>
  );
}

export default Layout;
