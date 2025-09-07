import Image from "next/image";
import scss from "./Visit.module.scss";
import frame from "./../../../../../public/Frame 10.svg";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiArrowSmRight } from "react-icons/hi";

const Visit = () => {
  return (
    <section className={scss.Visit}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left_visit}>
            <div className={scss.logo}>
              <Image src={frame} alt="alt" />
              <h2>Visit Restaurant</h2>
            </div>
            <h1>
              Join Us for <br /> Happy Hours
            </h1>
            <div className={scss.your}>
              <span>Your neighborhood</span>

              <p>
                225$.Lake Ave.Suite 1150 <br /> Pasadena,CA 911101
              </p>
            </div>
            <div className={scss.your}>
              <span>Opening hours:</span>

              <p>
                Mon-Thu: 10:00 am - 01:00 <br /> am <br />
                Fri-Sun: 10:00 am - 02:00 am
              </p>
            </div>
            <div className={scss.btn}>
              <span className={scss.up}></span>
              <button>
                Purchase gift card
                <HiArrowSmRight className={scss.icon_row} />
              </button>
              <span className={scss.out}></span>
            </div>
          </div>
          <div className={scss.right_visit}>
            <div className={scss.block}>
              <span>Contact Info</span>
              <p className={scss.tell}>
                <BsTelephoneOutboundFill />
                +771219900
              </p>
              <p className={scss.tell}>
                <TfiEmail />
                motionweb312@gmail.com
              </p>
              <div className={scss.icon}>
                <FaTelegramPlane />
                <AiFillInstagram />
              </div>
            </div>
            <iframe
              className={scss.map}
              src="https://2gis.kg/maps/74.618762,42.874619/zoom/15"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Visit;
