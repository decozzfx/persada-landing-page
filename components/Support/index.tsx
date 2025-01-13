"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const Support = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: string) => {
    e.preventDefault();
    if (type === "contactForm") {
      // Handle contact form submission
    }
    if (type === "presentation") {
      // Handle presentation form submission
    }
  };

  const ContactForm = ({ buttonText, type }) => (
    <form onSubmit={(e) => handleSubmit(e, type)} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder={t("name")}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder={t("email")}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="tel"
          placeholder={t("phone.number")}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder={t("company.name")}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <input
        type="text"
        placeholder={t("product.interest")}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        placeholder={t("customization.needs")}
        className="min-h-[100px] w-full resize-y rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="date"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="time"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <textarea
        placeholder={t("comments.or.questions")}
        className="min-h-[100px] w-full resize-y rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:w-auto"
      >
        {t(buttonText)}
      </button>
    </form>
  );

  return (
    <>
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-tr from-green-300 to-white py-40 "
      >
        <div className="mx-auto flex max-w-c-1154 px-4 md:px-8 2xl:px-0">
          <div className="md:w-1/2 ">
            <h1 className="text-3xl font-bold text-black">
              {t("support.section.1.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              {t("support.section.1.description")}
            </p>
          </div>
          <div className="aspect-ratio[200/200] relative md:w-1/2">
            <Image
              src="/images/hero/hero-dark.svg"
              alt="Support Header"
              fill
              className=""
            />
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto mt-20 max-w-4xl space-y-8"
      >
        {/* Demo Section */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {t("support.section.2.title")}
            </h2>
            <p className="mb-6 text-gray-600">
              {t("support.section.2.description")}
            </p>
            <ContactForm
              buttonText={t("support.section.2.button")}
              type="contactForm"
            />
          </div>
        </div>
      </motion.div>

      {/* Presentation Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mx-auto mt-20 max-w-4xl  space-y-8 overflow-hidden rounded-lg bg-white shadow-md"
      >
        <div className="p-6">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            {t("support.section.3.title")}
          </h2>
          <p className="mb-6 text-gray-600">
            {t("support.section.3.description")}
          </p>
          <ContactForm
            buttonText={t("support.section.3.button")}
            type="presentation"
          />
        </div>
      </motion.div>

      {/* Contact Section */}
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
        <div className="mx-auto my-20 max-w-c-1154 px-4 md:px-8 2xl:px-0">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-12 text-center">
            <div className="bg-grid-white/10 absolute inset-0"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold text-white">
                {t("support.section4.title")}
              </h2>
              <button className="transform rounded-xl bg-white px-8 py-4 font-semibold text-indigo-600 shadow-lg transition-colors duration-300 hover:-translate-y-0.5 hover:bg-opacity-90 hover:shadow-xl">
                <Link href="/contact">{t("support.section4.button")}</Link>
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Support;
