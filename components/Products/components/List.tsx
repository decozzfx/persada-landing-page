import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  number: string;
  title: string;
}

const Number: FC<{ number: string }> = ({ number }) => {
  return (
    <p className="text-metatitle3 font-semibold text-black dark:text-white">
      {number}
    </p>
  );
};

const List: FC<IProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div className="mt-3 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
        <Number {...props} />
      </div>
      <div className="w-3/4">
        <h3 className="mb-0.5 text-metatitle3 text-black dark:text-white">
          {t(props.title)}
        </h3>
        {/* <p>consectetur adipiscing elit fermentum ultricies.</p> */}
      </div>
    </div>
  );
};

export default List;
