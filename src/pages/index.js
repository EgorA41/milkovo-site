import React from "react";
import Layout from "../components/layout";
import Map from "../components/Map";
import Stats from "../components/Stats";
import HeroText from "../components/HeroText";

export default function HomePage() {
  return (
    <Layout>
      <Map />
      <div className="absolute top-20 left-1/3">
        <Stats />
      </div>
      <div className="absolute bottom-12 right-16 max-w-md">
        <HeroText />
      </div>
    </Layout>
  );
}
