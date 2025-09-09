import React from "react";
import Header from "./header"; // Исправлено: маленькая буква
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(155.78deg,#06192A_11.61%,#0C253B_44.69%,#041422_84.49%),linear-gradient(180deg,#F7FAFE_0%,#F7FAFE_100%)] text-whitemin-h-screen  text-white ">
      <Header />
      <div className="flex relative">
        <SidebarLeft />
        <main className="flex-1 relative">{children}</main>
        <SidebarRight />
      </div>
    </div>
  );
}

