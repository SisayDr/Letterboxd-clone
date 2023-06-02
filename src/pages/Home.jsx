import React from "react";
import FeaturedMovies from "../components/FeaturedMovies";
import HeaderImage from "../components/HeaderImage";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Stories from "../components/Stories";

const Home = () => {
  return (
    <>
      <HeaderImage imageUrl="https://a.ltrbxd.com/resized/sm/upload/82/hx/9r/sy/te44hmcKd8xDt6gQcSo62tZR2fC-1200-1200-675-675-crop-000000.jpg?v=8d5753ec55" />
      <HeroSection />
      <div className="max-w-5xl mx-auto">
        <FeaturedMovies />
        <Services />
        <Stories />
      </div>
    </>
  );
};

export default Home;
