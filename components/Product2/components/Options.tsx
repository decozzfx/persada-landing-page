import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { product2 } from "@/constants/products";
import Icon from "@/components/Icon";

const Options = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-10 lg:py-15 xl:py-20">
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            isBorderBottom
            headerInfo={{
              title: t(product2.section5.title),
              subtitle: t(product2.section5.subtitle),
            }}
          />
          {/* <!-- ===== Detail Section Start ===== --> */}

          <div className="p-6">
            <div className="space-y-6">
              {product2.section5.item.map((item, index) => (
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
                  className="animate_left "
                >
                  <div
                    key={index}
                    className="group rounded-lg border  transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="p-6">
                      <div className="flex h-full flex-col">
                        <div
                          className={`rounded-lg p-3 ${item.gradient} mb-4 w-fit`}
                        >
                          <Icon
                            name={item.icon}
                            size={24}
                            className="text-white"
                          />
                        </div>

                        <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-blue-600">
                          {t(item.title)}
                        </h3>

                        <p className="leading-relaxed text-gray-600">
                          {t(item.description)}
                        </p>

                        <div className="${feature.gradient} mt-4 h-1 w-0 rounded-full bg-gradient-to-r opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
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

export default Options;
