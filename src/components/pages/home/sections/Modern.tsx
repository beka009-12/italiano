"use client";
import Image from "next/image";
import scss from "./Modern.module.scss";

import frame from "./../../../../../public/Frame 10.svg";
import frame2 from "./../../../../../public/Frame 9.svg";
import one from "./../../../../../public/resto_bir.png";
import two from "./../../../../../public/resto_bar.png";
import three from "./../../../../../public/resto_client.png";
import four from "./../../../../../public/resto_kabinka.png";
import five from "./../../../../../public/resto_n.png";

const Modern = () => {
  return (
    <>
      <section className={scss.Modern}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.log}>
              <Image src={frame} alt="decor left" />
              <h1>Modern Interior</h1>
              <Image src={frame2} alt="decor right" />
            </div>

            <div className={scss.images}>
              <Image src={one} alt="interior one" className={scss.one} />
              <Image src={two} alt="interior two" className={scss.two} />
              <Image src={three} alt="interior three" className={scss.three} />
              <Image src={four} alt="interior four" className={scss.four} />
              <Image src={five} alt="interior five" className={scss.five} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modern;
