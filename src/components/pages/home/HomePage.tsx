import React from "react";
import Welcome from "./sections/Welcome";
import Menu from "./sections/Menu";
import Main from "./sections/Main";
import About from "./sections/About";

const HomePage = () => {
  return (
    <div>
      <Menu />
      <Main />
      <Welcome />
      <About/>
    </div>
  );
};

export default HomePage;
