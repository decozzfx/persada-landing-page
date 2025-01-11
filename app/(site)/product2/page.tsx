import Product2 from "@/components/Product2";
import brand from "@/constants/brand";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `IoT Solutions- ${brand.title}`,
  description: "IoT Solutions",
};

const ProductPage1 = async () => {
  return <Product2 />;
};

export default ProductPage1;
