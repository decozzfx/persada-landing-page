"use client";
import React from "react";
import Hero from "./components/Hero";
import FituresAndBenefits from "./components/FituresAndBenefits";
import ProductDetailSection from "./components/ProductDetailSection";
import ProblemAndSolution from "./components/Options";
import Cta from "./components/Cta";
import Overview from "./components/Overview";

const Product2 = () => {
  return (
    <main>
      <Hero />
      <Overview />
      <FituresAndBenefits />
      <ProductDetailSection />
      <ProblemAndSolution />
      <Cta />
    </main>
  );
};

export default Product2;
