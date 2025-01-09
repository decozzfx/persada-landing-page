import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import Products from "@/components/Products";
import FunFact from "@/components/FunFact";
import brand from "@/constants/brand";

export const metadata: Metadata = {
  title: `Home Page - ${brand.title}`,
  description: "Medical and Industrial Apparel",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <Products />
      {/* <FeaturesTab /> */}
      <FunFact />
      {/* <Integration /> */}
      {/* <CTA /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
      {/* <Blog /> */}
    </main>
  );
}
