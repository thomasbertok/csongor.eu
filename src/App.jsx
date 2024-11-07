import { useState } from "react";
import Slide from "./components/fullpage/Slide";
import FullPage from "./components/fullpage/FullPage";
import Header from "./components/Header";

import Home from "./sections/Home";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import Contact from "./sections/Contact";

import "./css/App.css";

function App() {
  // active page number state
  const [activePage, setActivePage] = useState(0);
  // menu is open state
  const [open, setOpen] = useState(false);
  // get the active state of 'page'
  const isActivePage = (page) => {
    return activePage === page ? "active" : "inactive";
  };

  return (
    <main className={`main-container ${open ? "main-container-open" : ""}`}>
      <Header />
      <FullPage
        controls
        duration={500}
        activePage={activePage}
        setActivePage={setActivePage}
        open={open}
        setOpen={setOpen}>
        <Slide title="Home" activestate={isActivePage(0)}>
          <Home setActivePage={setActivePage} />
        </Slide>

        <Slide title="Portfolio" activestate={isActivePage(1)}>
          <Portfolio activestate={isActivePage(1)} />
        </Slide>

        <Slide title="About" activestate={isActivePage(2)}>
          <About />
        </Slide>

        <Slide title="Contact" activestate={isActivePage(3)}>
          <Contact />
        </Slide>
      </FullPage>
    </main>
  );
}

export default App;
