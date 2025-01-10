"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { product1 } from "@/constants/products";
const Hero = () => {
  const { t } = useTranslation("");

  return (
    <>
      <section className="overflow-hidden  pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 2xl:px-0">
          <div className="items-center gap-10 ">
            <div className="animate_right mb-6">
              <div className="relative left-[25%] w-1/2 ">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[15/9] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="w-full text-center">
              <h1 className="mb-5 pr-10 text-4xl font-bold text-black dark:text-white  ">
                {t(product1.section1.subtitle)}
              </h1>
              {t(product1.section1.description)}

              <div className="mt-10">
                <div className="flex flex-wrap justify-center gap-5">
                  <Link
                    href="/support"
                    className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
                  >
                    {t("home.hero.button")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
