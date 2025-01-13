"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Team from "../Team";
import { useTranslation } from "react-i18next";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-gradient-to-bl from-transparent to-slate-300 py-40">
        <SectionHeader
          headerInfo={{
            title: t("about.section.1.title"),
            subtitle: t("about.section.1.subtitle"),
          }}
        />
      </div>
      <section className="overflow-hidden ">
        <div className="mx-auto max-w-c-1154 px-4 md:px-8">
          <div className="wow fadeInUp mt-40" data-wow-delay=".2s">
            <div className="-mx-4 mb-20 flex flex-wrap items-center">
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
                className="animate_left w-full px-4 lg:w-1/2"
              >
                <div className="mb-12 max-w-[540px] lg:mb-0">
                  <h2 className="text-dark mb-5 text-3xl font-bold leading-tight dark:text-white sm:text-[40px] sm:leading-[1.2]">
                    {t("about.section.2.title")}
                  </h2>
                  <p className="text-body-color dark:text-dark-6 mb-10 text-base leading-relaxed">
                    {t("about.section.2.subtitle")}
                  </p>
                  <h2 className="text-dark mb-5 text-3xl font-bold leading-tight dark:text-white sm:text-[40px] sm:leading-[1.2]">
                    {t("about.section.2.title")}
                  </h2>
                  <p className="text-body-color dark:text-dark-6 mb-10 text-base leading-relaxed">
                    {t("about.section.2.subtitle")}
                  </p>
                </div>
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
                className="animate_right w-full px-4 lg:w-1/2"
              >
                <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                  <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                    <div
                      className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                    >
                      <Image
                        src="/images/about-us/about-image-01.jpg"
                        alt="about image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                    <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                      <Image
                        src="/images/about-us/about-image-02.jpg"
                        alt="about image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                      <div>
                        <span className="block text-5xl font-extrabold text-white">
                          {new Date().getFullYear() - 1995}
                        </span>
                        <span className="block text-base font-semibold text-white">
                          {t("we.have")}
                        </span>
                        <span className="block text-base font-medium text-white text-opacity-70">
                          {t("years.of.experience")}
                        </span>
                      </div>
                      <div>
                        <span className="absolute left-0 top-0 -z-10">
                          <svg
                            width="106"
                            height="144"
                            viewBox="0 0 106 144"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.1"
                              x="-67"
                              y="47.127"
                              width="113.378"
                              height="131.304"
                              transform="rotate(-42.8643 -67 47.127)"
                              fill="url(#paint0_linear_1416_214)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1416_214"
                                x1="-10.3111"
                                y1="47.127"
                                x2="-10.3111"
                                y2="178.431"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" />
                                <stop
                                  offset="1"
                                  stopColor="white"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="absolute right-0 top-0 -z-10">
                          <svg
                            width="130"
                            height="97"
                            viewBox="0 0 130 97"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.1"
                              x="0.86792"
                              y="-6.67725"
                              width="155.563"
                              height="140.614"
                              transform="rotate(-42.8643 0.86792 -6.67725)"
                              fill="url(#paint0_linear_1416_215)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1416_215"
                                x1="78.6495"
                                y1="-6.67725"
                                x2="78.6495"
                                y2="133.937"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" />
                                <stop
                                  offset="1"
                                  stopColor="white"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="absolute bottom-0 right-0 -z-10">
                          <svg
                            width="175"
                            height="104"
                            viewBox="0 0 175 104"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.1"
                              x="175.011"
                              y="108.611"
                              width="101.246"
                              height="148.179"
                              transform="rotate(137.136 175.011 108.611)"
                              fill="url(#paint0_linear_1416_216)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1416_216"
                                x1="225.634"
                                y1="108.611"
                                x2="225.634"
                                y2="256.79"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" />
                                <stop
                                  offset="1"
                                  stopColor="white"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="w-full  py-24"
            >
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Main Value Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-12 text-center"
                >
                  <h2 className="animate-fade-in mb-6 text-3xl font-bold text-gray-900">
                    {t("about.section.3.title")}
                  </h2>

                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    {t("about.section.3.description")}
                  </p>

                  <div className="relative">
                    <div className="mx-auto mb-8 h-px w-24 bg-blue-500"></div>
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <h3 className="mb-8 text-2xl font-semibold text-gray-800">
                    {t("about.section.3.message")}
                  </h3>

                  <button className="inline-flex items-center rounded-full border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg">
                    <Link href="/contact">{t("about.section.3.button")}</Link>
                  </button>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative mt-16"
                >
                  <div className="grid grid-cols-3 gap-8">
                    {/* Innovation Icon */}
                    <div className="flex flex-col items-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                        <svg
                          className="h-8 w-8 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        {t("innovation")}
                      </span>
                    </div>

                    {/* Sustainability Icon */}
                    <div className="flex flex-col items-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <svg
                          className="h-8 w-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        {t("sustainability")}
                      </span>
                    </div>

                    {/* Future Icon */}
                    <div className="flex flex-col items-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                        <svg
                          className="h-8 w-8 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        {t("future")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
