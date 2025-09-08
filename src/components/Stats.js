import React from "react";

export default function Stats() {
  const data = [
    {
      value: "7",
      label: "НАСЕЛЕННЫХ ПУНКТОВ",
      className: "text-teal-400"
    },
    {
      value: "9",
      label: "ТЫС. ЧЕЛ. НАСЕЛЕНИЕ",
      className: "text-teal-400"
    },
    {
      value: "10",
      label: "МАРШРУТОВ",
      className: "text-teal-400"
    },
  ];

  return (
    <div className="flex space-x-16 text-center mb-8">
      {data.map((item, i) => (
        <div key={i} className="relative">
          {/* Круговая анимация */}
          <div className="relative w-20 h-20 mx-auto mb-2">
            <div className="absolute inset-0 rounded-full border-4 border-gray-600/30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-400 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-4xl font-bold ${item.className}`}>
                {item.value}
              </span>
            </div>
          </div>
          <p className="text-xs uppercase text-gray-300 font-medium tracking-wider">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
