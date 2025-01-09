import Product1 from "@/components/Product1";
import brand from "@/constants/brand";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Product Page - ${brand.title}`,
  description: "Medical and Industrial Apparel",
};

const ProductPage1 = async () => {
  return <Product1 />;
};

export default ProductPage1;
