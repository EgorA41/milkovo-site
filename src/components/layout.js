import React from "react";
import Header from "./header"; // Исправлено: маленькая буква
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Header />
      <div className="flex relative">
        <SidebarLeft />
        <main className="flex-1 relative">{children}</main>
        <SidebarRight />
      </div>
    </div>
  );
}

