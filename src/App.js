import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Faq from "./components/Faq";
import Contact from "./components/Contct";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Goal from "./components/Goal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Goal/>
      <Service/>
      <Faq/>
      <div className="lg:w-[1100px] mx-auto my-2 px-14 text-2xl font-normal">
      </div>
      <Contact/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
