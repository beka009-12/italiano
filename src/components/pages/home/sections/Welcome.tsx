import { type FC } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import scss from "./Welcome.module.scss";
import { ImLocation2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa";

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
              <img src="./Vector 2.svg" alt="img" className={scss.one}/>
              <img src="./Line 5.svg" alt="img" />
            </div>
            <h3>Delicious</h3>
            <div className={scss.right}>
              <img src="./Vector 1.svg" alt="img" className={scss.one}/>
              <img src="./Line 4.svg" alt="img" />
            </div>
          </div>
          <h1>Italian Cuisine</h1>
          <p>
            Classic steak & delicious with delightfully unexpenced twists.{" "}
            <br />
            The Restaurant`s sunny decor was inspired by the diners
          </p>
          <button>
            Reserve Your Table{" "}
            <span>
              <HiArrowNarrowRight />
            </span>
          </button>
          <div className={scss.bottom}>
            <div className={scss.bottomleft}>
              <h4>Location</h4>
              <span></span>
              <a><ImLocation2 /></a>
              <h5>Rua da moeda 1g,1200-275,Portugal</h5>
            </div>
            <div className={scss.bottomright}>
              <h4>Hotline</h4>
              <span></span>
              <a><FaPhone /></a>
              <h5>+771219900</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
