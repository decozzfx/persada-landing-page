import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "home",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "products",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Smart Medical & Industrial Clothing",
        newTab: false,
        path: "/product1",
      },
      {
        id: 32,
        title: "IoT Solutions",
        newTab: false,
        path: "/product2",
      },
    ],
  },
  {
    id: 2,
    title: "join.partner",
    newTab: false,
    path: "/join-partner",
  },
  {
    id: 2.1,
    title: "faq",
    newTab: false,
    path: "/faq",
  },
  {
    id: 5,
    title: "support",
    newTab: false,
    path: "/support",
  },
  {
    id: 4,
    title: "about.us",
    newTab: false,
    path: "/about",
  },
];

export default menuData;
