import React from "react";

import { Link } from "gatsby";
import logoUrl from "../images/logo.svg";
import PhoneLogo from "../images/button-call.svg";
import MapLogo from "../images/button-map.svg";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-16 py-4 bg-[#ECF3FE] shadow-md">

      <Link to="/" className="flex items-center">
        <img
          src={logoUrl}
          alt="Логотип Milkovo"
          className="h-10 w-auto"
        />
      </Link>

	  <div className="flex flex-col text-black text-xs mr-auto ml-2.5 uppercase">
		<span>Камчатский край</span>
		<span>Мильковский район</span>
		<span>Село Мильково</span>
	  </div>

       <div className="flex gap-3">
          <button className="text-white w-[189px] rounded-[10px_30px_30px_60px] px-7 py-2 m-0 flex justify-between items-center space-x-2 transition-colors bg-gradient-to-b from-[#78B5B5] to-[#375757]">
			<img src={PhoneLogo} className="h-[18px] w-[18px]" alt="Телефон" />
            <span className="text-sm max-w-[100px] items-center">Получить карту маршрутов</span>
          </button>

         <button className="text-black w-[189px] rounded-[10px_30px_30px_60px] px-7 py-2 m-0 flex justify-between items-center space-x-2 transition-colors bg-[linear-gradient(187.97deg,#FEFEFF_4.81%,#DAE2E7_80.73%)] shadow-[11px_8px_10px_rgba(181,190,197,0.36),12px_10px_10px_rgba(218,226,231,0.4),-8px_-10px_19px_rgba(255,255,255,0.57)]">
			<img src={MapLogo} className="h-[18px] w-[18px]" alt="Телефон" />
            <span className="text-sm max-w-[100px] items-center">Связаться для консультации</span>
          </button>

        </div>
    </header>
  );
}
