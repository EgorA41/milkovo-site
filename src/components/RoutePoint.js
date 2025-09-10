import React from "react";

export default function RoutePoint({ point, onClick }) {
  return (
    <button
      className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col justify-center items-center gap-2 cursor-pointer focus:outline-none"
      style={{
        left: `${point.x}px`,
        top: `${point.y}px`,
      }}
      onClick={() => onClick(point)}
    >
      <span className="absolute w-[52px] h-[52px] rounded-full bg-[#4fafac] opacity-20"></span>
      <span className="absolute w-[37.4px] h-[37.4px] rounded-full bg-[#4fafaf] opacity-60"></span>
      <span className="absolute w-[16.6px] h-[16.6px] rounded-full bg-[#4fafaf] border-[1.5px] border-white"></span>

      <span
	  style={{
        top: `${point.atop? -65 : 26}px`,
      }}
	  className="absolute px-3 py-2 bg-white border border-[#e0e0e0] rounded-full shadow-md text-[#4fafaf] font-sans text-sm whitespace-nowrap ">
        {point.label}
      </span>
    </button>
  );
}
