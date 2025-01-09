"use client";
import i18next, { langObj } from "@/lang/i18tnext";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  stickyMenu: boolean;
  isHome: boolean;
}

const LocalSwicher: React.FC<IProps> = ({ stickyMenu, isHome }) => {
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <li className={"group relative flex "}>
      <button
        className={`${
          stickyMenu ? "" : !isHome ? "fill-waterloo" : "text-white"
        } flex cursor-pointer items-center justify-between gap-3  hover:text-primary`}
      >
        {t(i18next.language)}
        <span>
          <svg
            className={`h-3 w-3 cursor-pointer ${
              stickyMenu
                ? "fill-waterloo"
                : !isHome
                ? "fill-waterloo"
                : "fill-white"
            }  group-hover:fill-primary`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </span>
      </button>
      <ul className={`dropdown `}>
        {
          Object.entries(langObj).map((item, key) => (
            <li key={key} className=" hover:text-primary">
              <button onClick={() => changeLanguage(item[1])}>{item[0]}</button>
            </li>
          ))
          // langObj.submenu.map((item, key) => (
          //   <li key={key} className="hover:text-primary">
          //     <Link href={item.path || "#"}>{item.title}</Link>
          //   </li>
          // ))
        }
      </ul>
    </li>
  );
};

export default LocalSwicher;
