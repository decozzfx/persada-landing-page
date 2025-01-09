"use client";
import React from "react";
import Hero from "./components/Hero";
import FituresAndBenefits from "./components/FituresAndBenefits";
import ProductDetailSection from "./components/ProductDetailSection";
import ProblemAndSolution from "./components/ProblemAndSolution";
import Cta from "./components/Cta";

const Product1 = () => {
  return (
    <main>
      <Hero />
      <ProductDetailSection />
      <FituresAndBenefits />
      <ProblemAndSolution />
      <Cta />
    </main>
  );
};

export default Product1;
