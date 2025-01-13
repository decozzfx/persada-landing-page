import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "Products",
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
    title: "Join Partner",
    newTab: false,
    path: "/join-partner",
  },
  {
    id: 2.1,
    title: "Faq",
    newTab: false,
    path: "/faq",
  },
  {
    id: 5,
    title: "Support",
    newTab: false,
    path: "/support",
  },
  {
    id: 4,
    title: "About Us",
    newTab: false,
    path: "/about",
  },
];

export default menuData;
