import React from "react";

export default function SidebarRight() {
  return (
    <aside className="w-64 bg-slate-800/50 p-4">
      {/* Правый сайдбар */}
      <div className="text-white">
        <h3 className="text-lg font-bold mb-4">Информация</h3>
        <div className="space-y-2">
          <p className="text-sm">Режим работы:</p>
          <p className="text-sm text-teal-400">Пн-Вс: 9:00-18:00</p>
        </div>
      </div>
    </aside>
  );
}
