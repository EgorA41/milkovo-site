import React from "react";
import Layout from "../components/Layout";
import Map from "../components/Map";
import Stats from "../components/Stats";
import HeroText from "../components/HeroText";

export default function HomePage() {
  return (
    <Layout>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Карта */}
        <Map />

        {/* Статистика поверх карты */}
        <div className="absolute top-20 left-1/3">
          <Stats />
        </div>

        {/* Текстовый блок с кнопкой */}
        <div className="absolute bottom-12 right-16 max-w-md">
          <HeroText />
        </div>
      </section>
    </Layout>
  );
}
