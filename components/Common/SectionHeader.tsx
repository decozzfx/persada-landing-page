"use client";
import { motion } from "framer-motion";

interface IProps {
  isTextWhiteColor?: boolean;
  isBorderBottom?: boolean;
  headerInfo: HeaderInfo;
}
type HeaderInfo = {
  title?: string;
  subtitle?: string;
  description?: string;
};

const SectionHeader: React.FC<IProps> = ({
  headerInfo,
  isTextWhiteColor,
  isBorderBottom,
}) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
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
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className={`animate_top mx-auto text-center
        ${
          isBorderBottom &&
          "after:mx-auto after:block after:w-1/12 after:rounded-full after:border-b-4 after:border-primary after:content-['']"
        }
        `}
      >
        {title && (
          <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
            <span className="text-md text-sectiontitle text-black dark:text-white">
              {title}
            </span>
          </div>
        )}
        <h2
          className={`mx-auto mb-4 text-3xl font-bold  ${
            isTextWhiteColor ? "text-white" : "text-black/60"
          } md:w-4/5 xl:w-1/2 xl:text-sectiontitle2`}
        >
          {subtitle}
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
