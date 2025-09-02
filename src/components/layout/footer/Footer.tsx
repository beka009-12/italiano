"use client";
import { useState, type FC } from "react";
import scss from "./Footer.module.scss";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useWindowSize } from "react-use";

const Footer: FC = () => {
  const { width } = useWindowSize();
  return (
    <footer id={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <h1>Restaurant</h1>
          {width >= 600 && (
            <div className={scss.nav}>
              <Link href="#">Interior</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Menu</Link>
              <Link href="#">Contacts</Link>
            </div>
          )}
          <div className={scss.icons}>
            <FaTelegramPlane />
            <AiFillInstagram />
          </div>
        </div>
        <p>c 2023 Motion Study LLC</p>
      </div>
    </footer>
  );
};

export default Footer;
