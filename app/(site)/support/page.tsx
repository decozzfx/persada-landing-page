import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import brand from "@/constants/brand";

export const metadata: Metadata = {
  title: `Support Page - ${brand.title}`,
  description: "Medical and Industrial Apparel",
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
