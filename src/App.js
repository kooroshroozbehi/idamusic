import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Recitals from "./components/Recitals";
import Calendar from "./components/Calendar";
import Instruments from "./components/Instruments";
import Programs from "./components/Programs";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Instruments />
      <Programs />
      <Contact />
    </>
  );
}

export default App;
