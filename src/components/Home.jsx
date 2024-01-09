import React from "react";

import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import Faq from "./Faq";
import Contact from "./Contct";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Goal from "./Goal";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Goal />
      <Service />
      <Faq />
      <div className="lg:w-[1100px] mx-auto my-2 px-14 text-2xl font-normal"></div>
      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
