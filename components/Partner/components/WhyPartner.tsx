import SectionHeader from "@/components/Common/SectionHeader";
import { CheckCircle, Cpu, Lightbulb, Trophy } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const WhyPartner = () => {
  const { t } = useTranslation();
  const reasons = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: t("partner.section1.reason.1.title"),
      description: t("partner.section1.reason.1.description"),
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: t("partner.section1.reason.2.title"),
      description: t("partner.section1.reason.2.description"),
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: t("partner.section1.reason.3.title"),
      description: t("partner.section1.reason.3.description"),
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t("partner.section1.reason.4.title"),
      description: t("partner.section1.reason.4.description"),
    },
  ];
  return (
    <>
      <motion.section
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
        className="relative mt-10 py-10"
      >
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              title: t("partner.section1.title"),
              subtitle: t("partner.section1.subtitle"),
            }}
          />

          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map((feature, index) => (
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
                className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 hover:shadow-xl"
              >
                <div className="flex gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 transition-colors duration-500 group-hover:bg-blue-600">
                    <div className="text-blue-600 transition-colors duration-500 group-hover:text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default WhyPartner;
