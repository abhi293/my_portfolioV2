// src/App.jsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Showcase from "./components/Showcase";
import Career from "./components/Career";
import Awards from "./components/Awards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    window.history.scrollRestoration = "manual"; // Prevents automatic scroll restoration
    window.scrollTo(0, 0); // Ensures the page starts from the top
  }, []);

  return (
    <>
      <Navbar setQuote={setQuote} />
      <Hero quote={quote} />
      <Skills />
      <Showcase />
      <Career />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
