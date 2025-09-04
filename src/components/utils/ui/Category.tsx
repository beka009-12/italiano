"use client";
import { useState, type FC } from "react";
import scss from "./Category.module.scss";

const categories = [
  { title: "Desserts" },
  { title: "Hot Drinks" },
  { title: "Cold Drinks" },
  { title: "National Foods" },
  { title: "Eastern cuisine" },
  { title: "Fast foods" },
];

const CategoryList: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={scss.contentLeft}>
      {categories.map((cat, index) => (
        <div
          key={cat.title}
          className={`${scss.category} ${
            activeIndex === index ? scss.active : ""
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <span>{cat.title}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
