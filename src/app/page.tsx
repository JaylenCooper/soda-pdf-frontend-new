import React from "react";
import Hero from "@/components/Home/Hero";
import FeaturesFree from "@/components/Home/FeaturesFree";
import FeaturesPopular from "@/components/Home/FeaturesPopular";
import FeaturesEssential from "@/components/Home/FeaturesEssential";
import FeaturesAdvanced from "@/components/Home/FeaturesAdvanced";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "PDFProdigy",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesFree />
      <FeaturesPopular />
      <FeaturesEssential />
      <FeaturesAdvanced />
      <Cook />
      <Expert />
      <Gallery />
      <Newsletter />
    </main>
  );
}
