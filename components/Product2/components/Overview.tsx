"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import SectionHeader from "@/components/Common/SectionHeader";
import { product2 } from "@/constants/products";
import { Activity, Smartphone } from "lucide-react";

interface IProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Overview = () => {
  const { t } = useTranslation();
  return (
    <section
      id="overview"
      className="bg-gradient-to-r from-meta/30 to-white py-10 lg:py-15 xl:py-20"
    >
      <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: t(product2.section2.title).toUpperCase(),
            subtitle: t(product2.section2.subtitle),
          }}
          isBorderBottom
        />
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-10 space-y-6"
        >
          <div className="flex items-start space-x-4 rounded-lg bg-blue-50 p-6">
            <div className="rounded-full bg-blue-100 p-3">
              <Smartphone className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800"></h4>
            <p className="text-gray-700">{t(product2.section2.description)}</p>
          </div>

          <div className="flex items-start space-x-4 rounded-lg bg-blue-50 p-6">
            <div className="rounded-full bg-blue-100 p-3">
              <Activity className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-gray-700">{t(product2.section2.description2)}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
