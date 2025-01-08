"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { useTranslation } from "react-i18next";
import Number from "./components/List";
import List from "./components/List";

const Products = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: t("home.products.title").toUpperCase(),
              subtitle: t("home.products.subtitle"),
              description: t("home.products.description"),
            }}
          />
          <div className="mt-12.5 flex items-center gap-8 lg:gap-32.5 xl:mt-20">
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
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
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
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  {t("new").toUpperCase()}
                </span>
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white ">
                {t("home.products.item1.title")}
              </h2>
              <p>{t("home.products.item1.description")} </p>
              <List number="01" title="home.products.item1.subitem1.title" />
              <List number="02" title="home.products.item1.subitem2.title" />
              <List number="03" title="home.products.item1.subitem3.title" />
              <List number="04" title="home.products.item1.subitem4.title" />
              <List number="05" title="home.products.item1.subitem5.title" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              {/* <h4 className="font-medium uppercase text-black dark:text-white">
                Launch Your SaaS Fast
              </h4> */}
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white ">
                {t("home.products.item2.title")}
              </h2>
              <p>{t("home.products.item2.description")} </p>
              <List number="01" title="home.products.item2.subitem1.title" />
              <List number="02" title="home.products.item2.subitem2.title" />
              <List number="03" title="home.products.item2.subitem3.title" />
              <List number="04" title="home.products.item2.subitem4.title" />
              <List number="05" title="home.products.item2.subitem5.title" />
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default Products;
