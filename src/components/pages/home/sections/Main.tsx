"use client";
import { useState, type FC } from "react";
import scss from "./Main.module.scss";

const categories = [
  { title: "Desserts" },
  { title: "Hot Drinks" },
  { title: "Cold Drinks" },
  { title: "National Foods" },
  { title: "Eastern cuisine" },
  { title: "Fast foods" },
];

// данные для еды справа
const foods = [
  {
    title: "Beer Brewery",
    price: "$24",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk.",
  },
  {
    title: "Pizza Margherita",
    price: "$15",
    description: "Classic Italian pizza with mozzarella and fresh basil.",
  },
  {
    title: "Chicken Biryani",
    price: "$20",
    description: "Fragrant rice with spices and tender chicken pieces.",
  },
  {
    title: "Cheeseburger",
    price: "$12",
    description: "Juicy beef patty with cheddar, lettuce, and tomato.",
  },
  {
    title: "Tiramisu",
    price: "$10",
    description: "Traditional Italian dessert with mascarpone and coffee.",
  },
  {
    title: "Sushi Set",
    price: "$30",
    description: "Fresh salmon, tuna, and avocado rolls.",
  },
];

const Main: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.text}></div>
        <div className={scss.content}>
          {/* Слева категории */}
          <div className={scss.contentLeft}>
            {categories.map((item, index) => (
              <div
                key={index}
                className={`${scss.category} ${
                  activeIndex === index ? scss.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          {/* Справа еда, максимум 5 */}
          <div className={scss.contentRight}>
            {foods.slice(0, 5).map((food, index) => (
              <div key={index} className={scss.context}>
                <div className={scss.price}>
                  <span>{food.title}</span>
                  <span className={scss.line}></span>
                  <p>{food.price}</p>
                </div>
                <p>{food.description}</p>
                <div className={scss.btn}>
                  <button>Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
