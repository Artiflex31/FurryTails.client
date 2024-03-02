import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Adoption from "./Components/programs&initialtives/Adoption";
import Error from "./Components/ErrorPage/Error";
import Donate from "./Components/Donation/Donate";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programs&initiatives/adoption" element={<Adoption />} />
        <Route path="*" element={<Error />} />
        <Route path="/donation" element={<Donate />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
