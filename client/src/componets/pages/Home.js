import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import { usePosts } from "../../context/postContext";
function Home() {
  

  return (
    <>
      <HeroSection />
      <Cards />
      
    </>
  );
}

export default Home;
