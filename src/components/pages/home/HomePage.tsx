import React from "react";
import Welcome from "./sections/Welcome";
import Menu from "./sections/Menu";
import Main from "./sections/Main";
import About from "./sections/About";
import Modern from "./sections/Modern";
import Visit from "./sections/Visit";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <About />
      <Menu />
      <Main />
      <Modern />
      <Visit />
    </div>
  );
};

export default HomePage;
