import React from "react";
import { Metadata } from "next";
import AboutUs from "@/components/AboutUs";
import brand from "@/constants/brand";

export const metadata: Metadata = {
  title: `Home Page - ${brand.title}`,
  description: "Medical and Industrial Apparel",
};

const AboutUsPage = () => {
  return (
    <div className="pb-20 pt-40">
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;
