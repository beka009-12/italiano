import React from "react";
import Welcome from "./sections/Welcome";
import Menu from "./sections/Menu";
import Main from "./sections/Main";

const HomePage = () => {
  return (
    <div>
      {/* <Welcome /> */}
      <Menu />
      <Main />
    </div>
  );
};

export default HomePage;
