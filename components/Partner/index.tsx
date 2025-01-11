"use client";
import React from "react";
import Hero from "./components/Hero";
import WhyPartner from "./components/WhyPartner";
import PartnerBenefits from "./components/PartnerBenefits";
import PartnerType from "./components/PartnerType";
import Cta from "./components/Cta";

const Partner = () => {
  return (
    <main>
      <Hero />
      <WhyPartner />
      <PartnerBenefits />
      <PartnerType />
      <Cta />
    </main>
  );
};

export default Partner;
