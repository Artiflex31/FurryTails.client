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
import Rehabilitation from "./Components/programs&initialtives/Rehabilitation";
import Conservation from "./Components/programs&initialtives/Conservation";
import Opportunities from "./Components/Volunteer/Opportunities";
import Applications from "./Components/Volunteer/Applications";
import Stories from "./Components/Volunteer/Stories";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programs&initiatives/adoption" element={<Adoption />} />
        <Route path="*" element={<Error />} />
        <Route path="/donate/donationplans" element={<Donate />} />
        <Route
          path="/programs&initiatives/rescue&rehabilitation"
          element={<Rehabilitation />}
        />
        <Route
          path="/programs&initiatives/conservation"
          element={<Conservation />}
        />
        <Route path="/volunteer/opportunities" element={<Opportunities />} />
        <Route path="/volunteer/Applications" element={<Applications />} />
        <Route path="/volunteer/Stories" element={<Stories />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
