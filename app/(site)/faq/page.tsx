import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import FAQ from "@/components/FAQ";
import brand from "@/constants/brand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Faq Page - ${brand.title}`,
  description: "Medical and Industrial Apparel",
};

const FaqPage = async () => {
  return (
    <>
      <FAQ />
    </>
  );
};

export default FaqPage;
