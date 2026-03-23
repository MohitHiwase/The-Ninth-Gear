import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import EditorialSplit from "./components/EditorialSplit";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <EditorialSplit />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
