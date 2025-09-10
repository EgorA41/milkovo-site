import React, { useState, useEffect, useRef } from "react";
import RoutePoint from "./RoutePoint";

const points = [
  { id: 1, x: 60, y: 345, atop: true, label: "Пущино" },
  { id: 2, x: 127, y: 293, label: "Шаромы" },
  { id: 2, x: 225, y: 236, atop: true, label: "Мильково" },
  { id: 2, x: 354, y: 153, atop: true, label: "Долиновка" },
  { id: 3, x: 429, y: 100, label: "Таежный" },
  { id: 3, x: 510, y: 30,atop: true, label: "Атласово" },
  { id: 4, x: 573, y: 51, label: "Лазо" },
];

export default function RouteLine() {
  const pathRef = useRef(null);
  const [showPoints, setShowPoints] = useState(false);

  useEffect(() => {
    const p = pathRef.current;
    if (!p) return;

    const len = p.getTotalLength();
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = len;
    p.style.transition = "none";

    requestAnimationFrame(() => {
      p.style.transition = "stroke-dashoffset 0.1s ease-in-out";
      p.style.strokeDashoffset = "0";
      p.addEventListener("transitionend", () => setShowPoints(true), {
        once: true,
      });
    });
  }, []);

  const handlePointClick = (point) => {
    alert(`Клик по: ${point.label}`);
  };

  return (
    <div className="relative w-[536px] h-[370px]">
      <svg
        className="absolute top-0 left-0 z-10 w-full h-full"
        viewBox="0 0 536 370"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M1.6 319.3C8 317.5 20.2 315.7 18 323.8C15.1 334 -3.4 363.8 7.3 366.1C18 368.3 14 361 40.5 351.4C66.9 341.9 70.9 350.3 92.8 327.2C114.8 304.1 111.4 294.6 137.3 288.9C163.2 283.3 148 298 167.7 272.1C187.4 246.2 173.9 249 201.5 242.2C229 235.5 206 248.4 244.8 231.5C283.6 214.7 283.6 207.9 302.8 195C321.9 182 314.6 184.8 336.5 167.9C358.5 151.1 380.4 134.2 403 125.7C425.5 117.3 408.6 112.2 431.7 97C454.7 81.8 500.3 77.9 507.1 69.4C513.8 61 516.6 57.1 513.8 52.6C525.7 41.3 522.3 39.6 529 26.7C534.4 16.3 531.3 5.8 529 1.9"
          stroke="url(#paint0_linear_4740_2811)"
          strokeWidth="6"
          fill="none"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4740_2811"
            x1="-17.8"
            y1="351.9"
            x2="259.4"
            y2="-278.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4FAFAF" />
            <stop offset="1" stopColor="#4FAFAF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {showPoints && points.map((point) => (
        <RoutePoint
          key={point.id}
          point={point}
          onClick={handlePointClick}
        />
      ))}
    </div>
  );
}
