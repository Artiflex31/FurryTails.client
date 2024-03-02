import React from "react";
import Hero from "../Hero/Hero";
import Community from "../Community/Community";
import CounterSection from "../CounterSection/CounterSection";
import Projects from "../Donation/Projects";
import Team from "../Team/Team";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Community />
      <CounterSection />
      <Projects />
      <Team />
      <PhotoGallery />
    </div>
  );
}
