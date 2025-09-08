import React from "react";

export default function HeroText() {
  return (
    <div className="bg-white bg-opacity-90 shadow-xl rounded-2xl p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Исследуй маршруты
      </h1>
      <p className="text-gray-700 mb-6">
        Получите карту маршрутов и начинайте путешествие прямо сейчас.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Получить карту маршрутов
      </button>
    </div>
  );
}
