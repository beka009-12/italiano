import { type FC } from "react";
import scss from "./Welcome.module.scss";
import welcomeImage from "../../../../../public/wImage.jpg";

const Welcome: FC = () => {
  return (
    <section
      className={scss.Welcome}
      style={{
        background: `url(${welcomeImage.blurDataURL})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
      }}
    >
      <div className="container">
        <div className={scss.content}>
          <h2>hello</h2>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
