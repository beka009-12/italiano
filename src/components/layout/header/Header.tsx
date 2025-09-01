import { type FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

const Header: FC = () => {
  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>Restaurant</h1>
          <div className={scss.nav}>
            <Link href="#">Interior</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Menu</Link>
            <Link href="#">Contacts</Link>
          </div>
          <button>
            <IoSearchOutline className={scss.search_icon} />
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
