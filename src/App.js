import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";


function App() {
  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </>
  );
}

export default App;