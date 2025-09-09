import React from "react";

export default function SidebarLeft() {
  return (
    <aside className="w-64 pl-16 py-18 text-[18px] text-white">
      <nav className="space-y-6">
        <div className="pb-2">
          <h3 className="text-lg font-medium border-b-2 border-teal-400 pb-2 inline-block">
            Населенные пункты
          </h3>
        </div>

        <div className="py-2">
          <h3 className="text-lg font-medium hover:text-teal-400 cursor-pointer transition-colors">
            Правила отдыха
          </h3>
        </div>

        <div className="py-2">
          <h3 className="text-lg font-medium hover:text-teal-400 cursor-pointer transition-colors">
            Реки и озера
          </h3>
        </div>

        <div className="py-2">
          <h3 className="text-lg font-medium hover:text-teal-400 cursor-pointer transition-colors">
            Спец службы
          </h3>
        </div>
      </nav>
    </aside>
  );
}
