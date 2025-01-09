import Signin from "@/components/Auth/Signin";
import brand from "@/constants/brand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home Page - ${brand.title}`,
  description: "Medical and Industrial Apparel",
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
