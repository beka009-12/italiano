"use client";
import { useState, type FC } from "react";
import scss from "./DetailPage.module.scss";

const categories = [
  { title: "Desserts" },
  { title: "Hot Drinks" },
  { title: "Cold Drinks" },
  { title: "National Foods" },
  { title: "Eastern cuisine" },
  { title: "Fast foods" },
];

const DetailPage: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className={scss.DetailPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.category}>
            <div className={scss.contentLeft}>
              {categories.map((cat, index) => (
                <div
                  key={cat.title}
                  className={`${scss.href} ${
                    activeIndex === index ? scss.active : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{cat.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={scss.product}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={scss.card}>
                <img
                  src="https://itslivb.com/wp-content/uploads/2023/03/1J7A7430-3-1440x2160.jpg"
                  alt=""
                />
                <div className={scss.info}>
                  <div className={scss.title}>
                    <h3>Ice Cream</h3>
                    <p className={scss.ingredients}>soda, cream, milk, sugar</p>
                  </div>
                  <span className={scss.price}>$9.11</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
