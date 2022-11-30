import React from "react";
import CallAction from "./CallAction";
import ClientPartner from "./ClientPartner";
import ContactFormSection from "./ContactFormSection";
import Pricing from "./Pricing";
import Service from "./Service";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
  return (
    <>
      <Service />
      <Pricing />
      <CallAction />
      <TestimonialSection />
      <ClientPartner />
      <ContactFormSection />
    </>
  );
};

export default Home;
