import React from "react";
import Header from "./Header";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default function Layout({ children }) {
  return (<div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Header />
      <div className="flex flex-1">
        <SidebarLeft />
        <main className="flex-1 relative">{children}</main>
        <SidebarRight />
      </div>
    </div>
  );
}
