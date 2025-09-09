import React from "react";

import routesIcon from "../images/aside_icons/aside-routes.svg";
import sightIcon from "../images/aside_icons/aside-sight.svg";
import housingIcon from "../images/aside_icons/aside-housing.svg";
import huntingIcon from "../images/aside_icons/aside-hunting.svg";
import fishIcon from "../images/aside_icons/aside-fishing.svg";
import foodIcon from "../images/aside_icons/aside-food.svg";
import forestIcon from "../images/aside_icons/aside-forest.svg";

export default function SidebarRight() {
  const categories = [
    { icon: routesIcon, label: "Транспорт" },
    { icon: sightIcon, label: "Достопримечательности" },
    { icon: housingIcon, label: "Размещение" },
    { icon: huntingIcon, label: "Трофейная охота" },
    { icon: fishIcon, label: "Рыбалка" },
    { icon: foodIcon, label: "Питание" },
    { icon: forestIcon, label: "Экотуризм" }
  ];

  return (
    <aside className="w-20 bg-[#6b7985] max-w-24 max-h-fit rounded-sm flex flex-col items-center mr-15 my-17 px-7 py-13 space-y-8">
      {categories.map((category, index) => (
        <button
          key={index}
          className="w-12 h-12 p-2.5 hover:bg-teal-500 flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110"
          title={category.label}
        >
           <img
            src={category.icon}
            alt={category.label}
            className="w-8 h-8 filter grayscale hover:grayscale-0 transition-all"
          />
        </button>
      ))}
    </aside>
  );
}
