import { type FC } from "react";
import scss from "./Btn.module.scss";
import { GoArrowRight } from "react-icons/go";

interface Btn {
  title: string;
}

const Btn: FC<Btn> = ({ title }) => {
  return (
    <div className={scss.btn}>
      <div className={scss.lineTop}></div>
      <button className={scss.button}>
        {title}
        <span>
          <GoArrowRight />
        </span>
      </button>
      <div className={scss.lineBotton}></div>
    </div>
  );
};

export default Btn;
