import React from "react";
import Map from "../components/Map";
import RouteLine from "../components/RouteLine";

export default function MapWithRoute() {
  return (
    <div className="relative max-w-175 h-[600px]">
      <Map />
      <div className="absolute bottom-20 left-6 pointer-events-none">
        <RouteLine />
      </div>
    </div>
  );
}
