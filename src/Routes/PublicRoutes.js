import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientPartner from "../pages/LandingPages/ClientPartner";
import ContactFormSection from "../pages/LandingPages/ContactFormSection";
import Home from "../pages/LandingPages/Home";
import Pricing from "../pages/LandingPages/Pricing";
import Service from "../pages/LandingPages/Service";
import TestimonialSection from "../pages/LandingPages/TestimonialSection";
import TestimonialTable from "../pages/LandingPages/TestimonialTable";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/service" element={<Service />} />
      <Route path="/clientPartner" element={<ClientPartner />} />
      <Route path="/testimonial" element={<TestimonialSection />} />
      <Route path="/contact" element={<ContactFormSection />} />
      <Route path="/table" element={<TestimonialTable />} />
    </Routes>
  );
};

export default PublicRoutes;
