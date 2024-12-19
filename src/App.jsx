import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import KeyFeatures from "./components/KeyFeatures/keyfeatures";
import ImpactSection from "./components/ImpactSection/ImpactSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <KeyFeatures />
      <ImpactSection />
      <TestimonialSection />
    </div>
  );
};

export default App;
