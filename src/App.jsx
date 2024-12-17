import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import KeyFeatures from "./components/KeyFeatures/keyfeatures";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <KeyFeatures />
    </div>
  );
};

export default App;
