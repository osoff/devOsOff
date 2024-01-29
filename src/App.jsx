import AboutMe from "./sections/AboutMe";
import Contacts from "./sections/Contacts";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import DarkModeToogle from "./ui/DarkModeToogle";

function App() {
  return (
    <div className="text-black relative dark:text-white bg-light dark:bg-dark">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contacts />
      <DarkModeToogle />
      <Footer />
    </div>
  );
}

export default App;
