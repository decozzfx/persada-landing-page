import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { product1 } from "@/constants/products";

const ProblemAndSolution = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-10 lg:py-15 xl:py-20">
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              subtitle: t(product1.section4.title),
            }}
          />
          {/* <!-- ===== Detail Section Start ===== --> */}

          <div className="p-6">
            <div className="space-y-6">
              {product1.section4.item.map((item, index) => (
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
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_left p-6"
                >
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                  >
                    <h3 className="mb-4 text-lg font-medium text-blue-600">
                      {t(item.title)}
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-lg bg-red-50 p-4">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 min-w-[24px]">❌</div>
                          <p className="text-gray-700">{t(item.problem)}</p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-green-50 p-4">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 min-w-[24px]">✅</div>
                          <p className="text-gray-700">{t(item.solution)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* <!-- ===== Detail Section End ===== --> */}
      </section>
    </>
  );
};

export default ProblemAndSolution;
