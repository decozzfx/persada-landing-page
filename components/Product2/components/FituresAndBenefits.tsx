"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";
import { product2 } from "@/constants/products";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

const FituresAndBenefits = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className=" py-10 lg:py-15 xl:py-20">
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: t(product2.section3.title).toUpperCase(),
              subtitle: t(product2.section3.subtitle),
            }}
            isBorderBottom
          />
          {/* <!-- ===== Detail Section Start ===== --> */}

          <div className="mt-10 ">
            {product2.section3.feature.map((data, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  className={`flex items-center gap-8 ${
                    isEven &&
                    "flex-row-reverse bg-gradient-to-r from-meta/20 to-white"
                  } px-10 py-10 `}
                >
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -20,
                      },

                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
                  >
                    <Image
                      src="/images/about/about-light-01.png"
                      alt="About"
                      className="dark:hidden"
                      fill
                    />
                    <Image
                      src="/images/about/about-dark-01.png"
                      alt="About"
                      className="hidden dark:block"
                      fill
                    />
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 20,
                      },

                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_right md:w-1/2"
                  >
                    <span className="font-medium uppercase text-black dark:text-white">
                      <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                        {t("new").toUpperCase()}
                      </span>
                    </span>
                    <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white ">
                      {t("home.products.item1.title")}
                    </h2>
                    <p>{t("home.products.item1.description")} </p>
                  </motion.div>
                </div>
                // <motion.div
                //   key={index}
                //   variants={{
                //     hidden: {
                //       opacity: 0,
                //       x: -20,
                //     },

                //     visible: {
                //       opacity: 1,
                //       x: 0,
                //     },
                //   }}
                //   initial="hidden"
                //   whileInView="visible"
                //   transition={{ duration: 0.5, delay: 0.1 }}
                //   viewport={{ once: true }}
                //   className="animate_left flex p-6"
                // >
                //   <div className="relative mx-auto aspect-[6/3] w-1/2">
                //     <Image src={data.image} alt="shape" fill />
                //   </div>
                //   <div className="w-1/2">
                //     <h3 className="mb-2 text-center text-xl font-semibold text-gray-600">
                //       {t(data.title)}
                //     </h3>
                //     <span className="font-medium uppercase text-black dark:text-white"></span>
                //     <p className="text-metatitle">{t(data.description)} </p>
                //   </div>
                // </motion.div>
              );
            })}
          </div>
        </div>

        {/* <!-- ===== Detail Section End ===== --> */}
      </section>
    </>
  );
};

export default FituresAndBenefits;
