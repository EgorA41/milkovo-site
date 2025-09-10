import React, { useEffect, useRef, useState } from "react";

export default function MapRoute() {
  const pathRef = useRef(null);
  const [length, setLength] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (pathRef.current) {
      const totalLength = pathRef.current.getTotalLength();
      setLength(totalLength);
	  console.log(totalLength)
      // запускаем анимацию после загрузки страницы
      setTimeout(() => setAnimate(true), 3000);
    }
  }, []);

  return (
    <svg
      width="536"
      height="370"
      viewBox="0 0 536 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <path
        ref={pathRef}
        d="M1.63972 319.343C8.01869 317.467 20.2138 315.741 17.9624 323.846C15.1481 333.977 -3.42593 363.808 7.26823 366.06C17.9624 368.311 14.0224 360.994 40.4764 351.426C66.9304 341.857 70.8703 350.3 92.8215 327.223C114.773 304.146 111.396 294.578 137.287 288.949C163.178 283.321 147.981 297.955 167.681 272.064C187.38 246.173 173.872 248.987 201.452 242.233C229.031 235.479 205.954 248.424 244.791 231.539C283.628 214.653 283.628 207.899 302.765 194.953C321.902 182.008 314.584 184.822 336.536 167.936C358.487 151.051 380.438 134.165 402.952 125.723C425.466 117.28 408.58 112.214 431.657 97.0173C454.734 81.8204 500.325 77.8804 507.079 69.4377C513.833 60.9949 516.648 57.055 513.833 52.5522C525.653 41.2952 522.276 39.6066 529.03 26.6611C534.434 16.3046 531.282 5.8356 529.03 1.89565"
        stroke="url(#paint0_linear_4740_2811)"
        strokeWidth="6"
        fill="none"
        strokeDasharray={length}
        strokeDashoffset={animate ? 0 : length}
        style={{
          transition: "stroke-dashoffset 3s ease-in-out",
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_4740_2811"
          x1="-17.8216"
          y1="351.907"
          x2="259.429"
          y2="-278.478"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4FAFAF" />
          <stop offset="1" stopColor="#4FAFAF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
