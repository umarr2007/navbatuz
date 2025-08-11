import React from "react";
import Layout from "../Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bout from "./pages/Bout";
import Line from "./pages/Line";
import Hero from "./components/Hero";
import Ticket from "./pages/Ticket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout />
              <Hero />
            </>
          }
        />
        {/* <Route path="bout" element={<Bout />} /> */}
        <Route path="line" element={<Line />} />
        <Route path="/ticket" element={<Ticket />} />

      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
