import React from "react";
import Layout from "../Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Queue from "./pages/Queue";
import Bout from "./pages/Bout";
import Line from "./pages/Line";
import Hero from "./components/Hero";


function App () {
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
        <Route path="queue" element={<Queue />} />
        <Route path="bout" element={<Bout />} />
        <Route path="line" element={<Line />} />
      </Routes>
      

    </BrowserRouter>



    
  );
}

export default App;
