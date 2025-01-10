"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";
import { product1 } from "@/constants/products";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

const FituresAndBenefits = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="bg-product1-section3 bg-cover py-10 lg:py-15 xl:py-20">
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: t(product1.section3.title).toUpperCase(),
              subtitle: t(product1.section3.subtitle),
            }}
            isBorderBottom
          />
          {/* <!-- ===== Detail Section Start ===== --> */}

          <div className="mt-10 grid grid-cols-1 gap-8 rounded-tl-3xl rounded-tr-3xl bg-white  px-10 py-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-32.5 xl:mt-20">
            {product1.section3.feature.map((data, index) => (
              <motion.div
                key={index}
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
                className="animate_left p-6"
              >
                <div className="relative mx-auto aspect-[12/9]">
                  <Image src={data.image} alt="shape" fill />
                </div>
                <h3 className="mb-2 text-center text-xl font-semibold text-gray-600">
                  {t(data.title)}
                </h3>
                <ul className="list-disc">
                  {data.item.map((text, index) => (
                    <li key={index} className="w-full text-center text-black">
                      {t(text)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <!-- ===== Detail Section End ===== --> */}
      </section>
    </>
  );
};

export default FituresAndBenefits;
