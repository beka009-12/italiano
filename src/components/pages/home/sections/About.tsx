import React from "react";
import scss from "./About.module.scss";

const About = () => {
  return (
    <section id={scss.about}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <div className={scss.topLeft}>
              <div className={scss.title}>
                <div className={scss.image}>
                  <img src="./Vector 2.svg" alt="img" className={scss.one}/>
                  <img src="./Line 5.svg" alt="img" />
                </div>
                <h3>About Us</h3>
              </div>
              <h1>
                A Journey Throught <br />
                Cafesio Flavors
              </h1>
            </div>
            <p>
              Try dishes that will open up new tastes for you and delight your 
              eyes with their appearance. Here you will find a cozy  atmosphere,
              excellent service and attention to each guest.  Book a table now
              and enjoy a unique experience of taste  discovery!
            </p>
          </div>
          <div className={scss.bottom}>
            <img src="./aboutIMG-1.png" alt="" />
            <img src="./aboutIMG-2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
