import React from "react";
import Map from "../components/Map";
import RouteLine from "../components/RouteLine";

export default function MapWithRoute() {
  return (
    <div className="relative w-full h-[600px]">
      <Map />
      <div className="absolute inset-0 pointer-events-none">
        <RouteLine />
      </div>
    </div>
  );
}
