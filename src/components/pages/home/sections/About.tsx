import React from "react";
import scss from "./About.module.scss";
import frame10 from "../../../../../public/Frame 10.svg";
import aboutIMG1 from "../../../../../public/aboutIMG-1.png";
import aboutIMG2 from "../../../../../public/aboutIMG-2.png";
import Image from "next/image";

const About = () => {
  return (
    <section id={scss.about}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <div className={scss.topLeft}>
              <div className={scss.title}>
                <div className={scss.image}>
                  <Image src={frame10} alt="" className={scss.one} />
                </div>
                <h3>About Us</h3>
              </div>
              <h1>
                A Journey Through <br />
                Cafesio Flavors
              </h1>
            </div>
            <p>
              Try dishes that will open up new tastes for you and delight your
              eyes with their appearance. Here you will find a cozy atmosphere,
              excellent service and attention to each guest. Book a table now
              and enjoy a unique experience of taste discovery!
            </p>
          </div>

          <div className={scss.bottom}>
            <div className={scss.imgWrapper}>
              <Image
                src={aboutIMG1}
                alt="Cozy Atmosphere"
                className={scss.bottomImg}
              />
            </div>

            <div className={scss.imgWrapper}>
              <Image
                src={aboutIMG2}
                alt="Delicious Flavors"
                className={scss.bottomImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
