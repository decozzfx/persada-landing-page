import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import brand from "@/constants/brand";
import Support from "@/components/Support";

export const metadata: Metadata = {
  title: `Support Page - ${brand.title}`,
  description: "Medical and Industrial Apparel",
};

const SupportPage = () => {
  return <Support />;
};

export default SupportPage;
