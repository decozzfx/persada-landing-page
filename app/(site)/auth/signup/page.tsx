import Signup from "@/components/Auth/Signup";
import brand from "@/constants/brand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home Page - ${brand.title}`,
  description: "Medical and Industrial Apparel",
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
