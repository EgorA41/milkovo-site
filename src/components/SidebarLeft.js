import React from "react";

export default function SidebarLeft() {
  return (
    <aside className="w-64 bg-slate-800/50 p-4">
      {/* Левый сайдбар */}
      <nav>
        <ul className="space-y-2">
          <li><a href="/" className="text-white hover:text-teal-400">Главная</a></li>
          <li><a href="/routes" className="text-white hover:text-teal-400">Маршруты</a></li>
          <li><a href="/places" className="text-white hover:text-teal-400">Места</a></li>
        </ul>
      </nav>
    </aside>
  );
}
