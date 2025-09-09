import React from "react";

export default function Stats() {
  const data = [
    {
      value: "7",
      label: "НАСЕЛЕННЫХ ПУНКТОВ",
    },
    {
      value: "9",
      label: "ТЫС. ЧЕЛ. НАСЕЛЕНИЕ",
    },
    {
      value: "10",
      label: "МАРШРУТОВ",
      className: "text-teal-400",
    },
  ];

  return (
    <div className="flex space-x-16 text-center mb-8 items-start">
      {data.map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          {/* контейнер для числа и арок */}
          <div className="relative w-24 h-24 flex items-center justify-center mb-2">
            {/* число */}
            <span className={`text-4xl font-bold ${item.className ?? "text-teal-400"}`}>
              {typeof item.value === "number"
                ? new Intl.NumberFormat("ru-RU").format(item.value)
                : item.value}
            </span>

            {/* верхняя (меньшая) арка — под цифрой */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 pointer-events-none">
              <svg width="76" height="20" viewBox="0 0 76 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id={`grad-top-${i}`} x1="38.1915" y1="-1.17296" x2="38.1915" y2="19.7439" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0710702" stopColor="#D9D9D9" stopOpacity="0" />
                    <stop offset="1" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
                <path
                  d="M58.9407 0.57632C65.4725 1.78827 70.4771 3.54163 73.2492 5.58933C76.0213 7.63704 76.4212 9.87586 74.3926 11.9904C72.3639 14.1048 68.009 15.9884 61.9415 17.3756C55.8739 18.7628 48.3996 19.5838 40.5716 19.7228C32.7437 19.8619 24.9567 19.3119 18.308 18.1505C11.6592 16.9891 6.48386 15.2748 3.51112 13.2492C0.538385 11.2235 -0.0818815 8.98859 1.73772 6.85934C3.55733 4.73009 7.72508 2.81384 13.6537 1.38059L18.8139 3.04297C14.1321 4.17481 10.8408 5.68808 9.40384 7.36955C7.9669 9.05103 8.45672 10.8159 10.8043 12.4156C13.1519 14.0153 17.2389 15.3691 22.4894 16.2862C27.7399 17.2034 33.8893 17.6377 40.0711 17.5279C46.2528 17.4181 52.1553 16.7698 56.9469 15.6743C61.7385 14.5788 65.1776 13.0913 66.7796 11.4215C68.3816 9.75171 68.0658 7.9837 65.8767 6.36662C63.6875 4.74954 59.7354 3.36491 54.5772 2.40783L58.9407 0.57632Z"
                  fill={`url(#grad-top-${i})`}
                />
              </svg>
            </div>

            {/* нижняя (большая) арка */}
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 pointer-events-none">
              <svg width="96" height="25" viewBox="0 0 96 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id={`grad-bottom-${i}`} x1="47.9346" y1="-1.68681" x2="47.9346" y2="24.4593" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0710702" stopColor="#D9D9D9" stopOpacity="0" />
                    <stop offset="1" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
                <path
                  d="M74.4742 0.499785C82.8289 2.01472 89.2301 4.20642 92.7758 6.76605C96.3215 9.32568 96.833 12.1242 94.2383 14.7673C91.6435 17.4104 86.0733 19.7649 78.3124 21.4989C70.5516 23.2329 60.9914 24.2591 50.9789 24.4329C40.9664 24.6067 31.0063 23.9193 22.5021 22.4676C13.9979 21.0158 7.37828 18.8729 3.57594 16.3408C-0.226406 13.8088 -1.01977 11.0151 1.30763 8.35356C3.63503 5.69199 8.96587 3.29668 16.549 1.50513L23.1493 3.5831C17.1609 4.99789 12.9511 6.88948 11.1131 8.99132C9.27518 11.0932 9.9017 13.2993 12.9044 15.2989C15.9071 17.2985 21.1347 18.9907 27.8505 20.1372C34.5663 21.2836 42.4318 21.8265 50.3387 21.6892C58.2456 21.552 65.7953 20.7416 71.9241 19.3723C78.0528 18.0029 82.4516 16.1436 84.5007 14.0563C86.5498 11.969 86.1459 9.75901 83.3458 7.73766C80.5457 5.71631 75.4907 3.98553 68.893 2.78918L74.4742 0.499785Z"
                  fill={`url(#grad-bottom-${i})`}
                />
              </svg>
            </div>
          </div>

          {/* подпись */}
          <p className="text-xs uppercase text-gray-300 font-medium tracking-wider max-w-[110px]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
