import React from "react";
import Layout from "../components/layout";
import Map from "../components/Map";
import Stats from "../components/Stats";
import HeroText from "../components/HeroText";

export default function HomePage() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Статистика в верхней части */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
          <Stats />
        </div>

        {/* Основная карта */}
        <div className="relative h-screen">
          <Map />
        </div>

        {/* Текстовый блок внизу справа */}
        <div className="absolute bottom-16 right-16 max-w-md z-10">
          <HeroText />
        </div>
      </div>
    </Layout>
  );
}
