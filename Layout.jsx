import React, { useState } from "react";
import Header from "./src/components/Header";

function Layout({ children }) {
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [secondOpen, setSecondOpen] = useState(false);

  return (
    <div>
      <Header
        country={country}
        district={district}
        secondOpen={secondOpen}
        setSecondOpen={setSecondOpen}
      />
      {children}
    </div>
  );
}

export default Layout;
