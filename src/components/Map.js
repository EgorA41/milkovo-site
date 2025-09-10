import React from "react";
import mapUrl from "../images/map.png";
import wavesUrl from "../images/waves.svg";

export default function Map() {
  return (
    <div className="relative top-[152px] w-full flex justify-start items-center">
		<img src ={mapUrl} alt="Карта маршрутов" className="max-w-3xl w-full h-auto"/>
		<img src ={wavesUrl} alt="Декоративные волны" className="absolute -bottom-10 left-30 max-w-[250px] w-full h-auto"/>
    </div>
  );
}
