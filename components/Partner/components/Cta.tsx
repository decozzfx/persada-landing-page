import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Cta = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.section
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
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative py-10"
      >
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 2xl:px-0">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-12 text-center">
            <div className="bg-grid-white/10 absolute inset-0"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold text-white">
                {t("partner.section4.title")}
              </h2>
              <p className="text-xl text-white/90">
                {t("partner.section4.description")}
              </p>
              <button className="transform rounded-xl bg-white px-8 py-4 font-semibold text-indigo-600 shadow-lg transition-colors duration-300 hover:-translate-y-0.5 hover:bg-opacity-90 hover:shadow-xl">
                {t("partner.section4.button")}
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Cta;
