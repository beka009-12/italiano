"use client";
import Image from "next/image";
import scss from "./Visit.module.scss";

import frame from "./../../../../../public/Frame 10.svg";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiArrowSmRight } from "react-icons/hi";

import MapComponent from "@/components/utils/map/MapComponents";

const Visit = () => {
  return (
    <section className={scss.Visit}>
      <div className="container">
        <div className={scss.content}>
          {/* LEFT BLOCK */}
          <div className={scss.left}>
            <header className={scss.logo}>
              <Image src={frame} alt="Visit Restaurant" priority />
              <h2>Visit Restaurant</h2>
            </header>

            <h1 className={scss.title}>
              Join Us for <br /> Happy Hours
            </h1>

            <address className={scss.info}>
              <span>Your neighborhood</span>
              <p>
                225$. Lake Ave. Suite 1150 <br /> Pasadena, CA 911101
              </p>
            </address>

            <div className={scss.info}>
              <span>Opening hours:</span>
              <p>
                Mon–Thu: 10:00 am – 01:00 am <br />
                Fri–Sun: 10:00 am – 02:00 am
              </p>
            </div>

            <div className={scss.btnWrapper}>
              <button className={scss.btn}>
                Purchase gift card
                <HiArrowSmRight className={scss.iconRow} />
              </button>
            </div>
          </div>

          {/* RIGHT BLOCK */}
          <div className={scss.right}>
            <div className={scss.contact}>
              <span className={scss.contactTitle}>Contact Info</span>

              <p className={scss.contactItem}>
                <BsTelephoneOutboundFill />
                +7 712 199 00
              </p>

              <p className={scss.contactItem}>
                <TfiEmail />
                motionweb312@gmail.com
              </p>

              <nav className={scss.social}>
                <a href="https://t.me/" target="_blank" aria-label="Telegram">
                  <FaTelegramPlane />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </nav>
            </div>

            <div className={scss.map}>
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
