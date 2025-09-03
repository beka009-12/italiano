import { type FC } from "react";
import scss from "./Welcome.module.scss";
import { ImLocation2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa";
import Btn from "@/components/utils/ui/btn/Btn";
import frame1 from "../../../../../public/Frame 10.svg";
import frame2 from "../../../../../public/Frame 9.svg";
import Image from "next/image";

const Welcome: FC = () => {
  return (
    <section
      className={scss.Welcome}
      style={{
        background: `url(./italianImg.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className={scss.content}>
          <div className={scss.title}>
            <div className={scss.left}>
              <Image src={frame1} alt="img" className={scss.one} />
            </div>
            <h3>Delicious</h3>
            <div className={scss.right}>
              <Image src={frame2} alt="img" className={scss.one} />
            </div>
          </div>
          <h1>Italian Cuisine</h1>
          <p>
            Classic steak & delicious with delightfully unexpenced twists.{" "}
            <br />
            The Restaurants sunny decor was inspired by the diners
          </p>
          <Btn title="Reserve Your Table" />
          <div className={scss.bottom}>
            <div className={scss.bottomleft}>
              <h4>Location</h4>
              <span></span>
              <a>
                <ImLocation2 />
              </a>
              <h5>Rua da moeda 1g 1200-275 Portugal</h5>
            </div>
            <div className={scss.bottomright}>
              <h4>Hotline</h4>
              <span></span>
              <a>
                <FaPhone />
              </a>
              <h5>+771219900</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
