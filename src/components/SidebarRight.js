import React from "react";

export default function SidebarRight() {
  const categories = [
    { icon: "🚗", label: "Транспорт" },
    { icon: "🗻", label: "Достопримечательности" },
    { icon: "⛺", label: "Кемпинг" },
    { icon: "🦌", label: "Дикая природа" },
    { icon: "🐟", label: "Рыбалка" },
    { icon: "🍽️", label: "Питание" },
    { icon: "🌲", label: "Экотуризм" }
  ];

  return (
    <aside className="w-20 bg-gray-600/80 flex flex-col items-center py-6 space-y-6">
      {categories.map((category, index) => (
        <button
          key={index}
          className="w-12 h-12 bg-gray-700/50 hover:bg-teal-500 rounded-lg flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110"
          title={category.label}
        >
          <span className="filter grayscale hover:grayscale-0 transition-all">
            {category.icon}
          </span>
        </button>
      ))}
    </aside>
  );
}
