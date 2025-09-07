"use client";
import { useState, useEffect, type FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header: FC = () => {
  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>Restaurant</h1>

          {width >= 768 && (
            <nav className={scss.nav}>
              <Link href="#">Interior</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Menu</Link>
              <Link href="#">Contacts</Link>
            </nav>
          )}

          {/* бургер */}
          <button
            className={scss.hamburger}
            onClick={() => setIsMenuOpen(true)}
          >
            <svg viewBox="0 0 32 32">
              <path
                className={`${scss.line} ${scss["line-top-bottom"]}`}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 
                   9 3.5 10.8 2 13 2 
                   15.2 2 17 3.8 17 6L17 26 
                   C17 28.2 18.8 30 21 30 
                   23.2 30 25 28.2 25 26 
                   25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className={scss.line} d="M7 16 27 16"></path>
            </svg>
          </button>

          <button className={scss.search_btn}>
            <IoSearchOutline className={scss.search_icon} />
            Search
          </button>
        </div>
      </div>

      {/* Модалка меню */}
      {isMenuOpen && (
        <div className={scss.modal}>
          <button
            className={scss.close_btn}
            onClick={() => setIsMenuOpen(false)}
          >
            <IoClose size={30} />
          </button>

          <nav className={scss.modal_nav}>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>
              Interior
            </Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>
              Contacts
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
