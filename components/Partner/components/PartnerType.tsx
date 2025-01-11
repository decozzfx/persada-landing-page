import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PartnerType = () => {
  const { t } = useTranslation();

  const partnerType = [
    {
      title: t("partner.section3.type.1.title"),
      description: t("partner.section3.type.1.description"),
      benefits: [
        t("partner.section3.type.1.benefit1"),
        t("partner.section3.type.1.benefit2"),
        t("partner.section3.type.1.benefit3"),
      ],
      gradient: "from-blue-600/80 to-indigo-600/80",
      hoverGradient: "from-blue-600 to-indigo-600",
    },
    {
      title: t("partner.section3.type.2.title"),
      description: t("partner.section3.type.2.description"),
      benefits: [
        t("partner.section3.type.2.benefit1"),
        t("partner.section3.type.2.benefit2"),
        t("partner.section3.type.2.benefit3"),
      ],
      gradient: "from-purple-600/80 to-pink-600/80",
      hoverGradient: "from-purple-600 to-pink-600",
    },
    {
      title: t("partner.section3.type.3.title"),
      description: t("partner.section3.type.3.description"),
      benefits: [
        t("partner.section3.type.3.benefit1"),
        t("partner.section3.type.3.benefit2"),
        t("partner.section3.type.3.benefit3"),
      ],
      gradient: "from-indigo-600/80 to-violet-600/80",
      hoverGradient: "from-indigo-600 to-violet-600",
    },
  ];

  return (
    <>
      <section className="relative py-10">
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 2xl:px-0">
          <div className="space-y-8">
            <SectionHeader
              headerInfo={{
                subtitle: t("partner.section3.subtitle"),
              }}
              isBorderBottom
            />
            <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-center text-3xl font-bold text-gray-800 text-transparent"></h2>

            {partnerType.map((program, index) => (
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/30 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${program.gradient} opacity-5 transition-opacity duration-300 group-hover:opacity-10`}
                ></div>
                <div className="relative z-10">
                  <h3 className="mb-4 text-2xl font-bold text-gray-800">
                    {program.title}
                  </h3>
                  <p className="mb-6 text-gray-600">{program.description}</p>
                  <div className="rounded-xl bg-white/50 p-6 backdrop-blur-sm">
                    <h4 className="mb-4 text-lg font-semibold text-gray-700">
                      Benefits:
                    </h4>
                    <ul className="space-y-3">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <span
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${program.hoverGradient}`}
                          ></span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerType;
