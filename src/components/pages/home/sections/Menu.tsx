"use client";
import { useRef, type FC } from "react";
import scss from "./Menu.module.scss";
import image1 from "../../../../../public/menuImages.png";
import image2 from "../../../../../public/menuImage2.png";
import Image from "next/image";
import frame from "../../../../../public/Frame 10.svg";

const images = [
  { url: image1 },
  { url: image2 },
  { url: image1 },
  { url: image2 },
];

const Menu: FC = () => {
  const imageContentRef = useRef<HTMLDivElement>(null);

  const scrollAmount = 286 * 2; // два изображения

  const handleScroll = (direction: "left" | "right") => {
    if (imageContentRef.current) {
      imageContentRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={scss.Menu}>
      <div className="container">
        <div className={scss.content}>
          {/* Text */}
          <div className={scss.text}>
            <div className={scss.header}>
              <span className={scss.underline}>
                <Image src={frame} alt="" />
              </span>
              <span className={scss.bestSellers}>Best Sellers</span>
            </div>
            <h1 className={scss.title}>
              You Only Reserve <br />
              Exception
            </h1>
            <p className={scss.subtitle}>
              Each location has a menu that's curated just for them.
              <br />
              See what’s new at your Cafesio and You’ll find Cafesio
              <br />
              Covent Garden moments.
            </p>
          </div>

          {/* Images */}
          <div className={scss.images}>
            {/* Left arrow */}
            <div
              className={`${scss.arrow} ${scss.left}`}
              onClick={() => handleScroll("left")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.75 19.5 11.25 12l7.5-7.5M12.75 19.5 5.25 12l7.5-7.5"
                />
              </svg>
            </div>

            {/* Image content */}
            <div className={scss.image_content} ref={imageContentRef}>
              {images.map((item, index) => (
                <div key={index} className={scss.imageWrapper}>
                  <Image
                    src={item.url}
                    alt="menu image"
                    className={scss.image}
                  />
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <div
              className={`${scss.arrow} ${scss.right}`}
              onClick={() => handleScroll("right")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
