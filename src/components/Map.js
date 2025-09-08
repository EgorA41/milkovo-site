import React from "react";

export default function Map() {
  return (
    <div className="w-full h-full bg-gray-200">
      {/* Здесь потом подключим интерактивную карту или SVG */}
      <img
        src="/map-placeholder.png"
        alt="Карта маршрутов"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
