import React from "react";
import { Metadata } from "next";
import AboutUs from "@/components/AboutUs";

export const metadata: Metadata = {
  title: "About Us Page - Persada",
  description: "This is About Us page for Solid Pro",
  // other metadata
};

const AboutUsPage = () => {
  return (
    <div className="pb-20 pt-40">
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;
