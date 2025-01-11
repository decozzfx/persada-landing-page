import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PartnerBenefits = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      title: t("partner.section2.benefit.1.title"),
      description: t("partner.section2.benefit.1.description"),
      icon: "📈",
    },
    {
      title: t("partner.section2.benefit.2.title"),
      description: t("partner.section2.benefit.2.description"),
      icon: "🤝",
    },
    {
      title: t("partner.section2.benefit.3.title"),
      description: t("partner.section2.benefit.3.description"),
      icon: "📊",
    },
    {
      title: t("partner.section2.benefit.4.title"),
      description: t("partner.section2.benefit.4.description"),
      icon: "📚",
    },
  ];

  return (
    <>
      <section className="relative py-10">
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 2xl:px-0">
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/30 p-8 shadow-xl backdrop-blur-lg">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <SectionHeader
                headerInfo={{
                  subtitle: "Partnership Benefits",
                }}
                isBorderBottom
              />
              <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                {benefits.map((benefit, index) => (
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
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                    className="group  relative rounded-2xl border border-white/50 bg-white/50 p-6  transition-all duration-300 hover:bg-white/70 hover:shadow-lg"
                  >
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-10"></div>
                    <div className="relative">
                      <span className="mb-4 block text-4xl">
                        {benefit.icon}
                      </span>
                      <h3 className="mb-3 text-xl font-semibold text-gray-800">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerBenefits;
