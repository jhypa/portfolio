import CustomCursor from "./components/CustomCursor";
import BackgroundCanvas from "./components/BackgroundCanvas";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CustomCursor />
      <BackgroundCanvas />
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
