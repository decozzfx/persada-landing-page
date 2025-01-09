import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { product1 } from "@/constants/products";
import { motion } from "framer-motion";

const Cta = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 lg:py-15 xl:py-20">
      <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0">
        <div className="mx-auto w-full max-w-2xl bg-gradient-to-br from-gray-50 to-white shadow-xl">
          <div className="relative overflow-hidden p-8">
            {/* Background decorative elements */}
            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-blue-50 opacity-20" />
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-24 w-24 rounded-full bg-purple-50 opacity-20" />
            <div className="relative z-10 text-center">
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
                className="animate_left p-6"
              >
                <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
                  {t(product1.section5.title)}
                </h2>

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
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="animate_left p-6"
                >
                  <div className="group relative mb-6 inline-block cursor-pointer">
                    <button className="transform  border-none bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:translate-x-0">
                      <span className="mr-2">
                        {t(product1.section5.button)}
                      </span>
                      <ArrowRight className="inline-block h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                    </button>
                    <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur transition duration-300 group-hover:opacity-50" />
                  </div>
                </motion.div>

                <div className="space-y-2 text-sm text-gray-600">
                  <p className="transform transition-all duration-300 hover:scale-105">
                    {t(product1.section5.subtitle)}
                    <a
                      href="#contact"
                      className="border-b-2 border-transparent font-medium text-blue-600 transition-colors
                         duration-300 hover:border-purple-600 hover:text-purple-600"
                    >
                      {t(product1.section5.link)}
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative corners */}
            <div className="absolute left-0 top-0 h-16 w-16 rounded-tl-lg border-l-4 border-t-4 border-blue-200" />
            <div className="absolute bottom-0 right-0 h-16 w-16 rounded-br-lg border-b-4 border-r-4 border-purple-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
