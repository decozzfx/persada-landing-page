import { ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const stats = [
    { value: 3, label: t("years"), isPlus: false },
    { value: 40, label: t("partners"), isPlus: true },
    { value: 135, label: t("projects"), isPlus: true },
    { value: 25, label: t("solutions"), isPlus: true },
  ];

  return (
    <>
      <section className="relative bg-gray-900 py-10 text-white">
        <div className="mx-auto flex max-w-c-1154 px-4 md:px-8 2xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mx-auto max-w-7xl px-4 py-24"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 text-4xl font-bold"
            >
              {t("partner.hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12 text-xl"
            >
              {t("partner.hero.description")}
            </motion.p>

            {/* Stats */}
            <div className="mb-16 flex flex-wrap gap-4">
              {stats.map((stat, index) => {
                const count = useMotionValue(1);
                const rounded = useTransform(count, (latest) =>
                  Math.round(latest),
                );

                useEffect(() => {
                  const controls = animate(count, stat.value, {
                    duration: 3,
                    ease: "easeInOut",
                  });
                  return () => controls.stop();
                }, []);

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    key={index}
                    className="rounded-lg bg-white/10 px-8 py-4 backdrop-blur-lg"
                  >
                    <div className="flex items-center gap-1">
                      <motion.div className=" text-3xl font-bold text-blue-400">
                        {rounded}
                      </motion.div>
                      <p className="text-xl font-semibold">
                        {stat.isPlus && "+"}
                      </p>
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-3 text-white hover:bg-blue-600"
            >
              {t("partner.hero.button")}
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="my-auto w-1/2"
          >
            <Image
              alt="hero"
              src="/images/about/about-light-01.png"
              width={500}
              height={500}
              layout="responsive"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
