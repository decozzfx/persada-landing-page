"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import SectionHeader from "@/components/Common/SectionHeader";
import { product1 } from "@/constants/products";

interface IProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Product: React.FC<IProps> = ({ id, title, description, image }) => {
  const { t } = useTranslation();
  return (
    <div className="dark:bg-dark-500 rounded-md bg-white p-5 shadow-md">
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
        className="animate_left relative mx-auto aspect-[12/9]"
      >
        <Image src={image} alt="About" fill />
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
        className="animate_right "
      >
        <span className="font-medium uppercase text-black dark:text-white"></span>
        <h2 className="relative mb-2 text-lg font-bold text-black dark:text-white ">
          {t(title)}
        </h2>
        <p className="text-metatitle">{t(description)} </p>
      </motion.div>
    </div>
  );
};

const ProductDetailSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-r from-meta/30 to-white py-10 lg:py-15 xl:py-20">
      <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: t(product1.section1.title).toUpperCase(),
            subtitle: t(product1.section1.subtitle),
            description: t(product1.section1.description),
          }}
        />
        <div className="grid grid-cols-1  gap-10 pt-9 md:grid-cols-2 lg:grid-cols-3">
          {product1.section2.productList.map((item) => (
            <Product {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
