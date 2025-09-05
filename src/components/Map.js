import React from "react";

export default function Map() {
  return (
    <div className="relative">
      <img src="/images/map.png" alt="Карта" className="w-full h-auto" />

      {/* Маркер Мильково */}
      <div className="absolute top-[40%] left-[35%]">
        <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white"></div>
        <span className="absolute left-8 top-0">Мильково</span>
      </div>

      {/* Другие метки аналогично */}
    </div>
  );
}
