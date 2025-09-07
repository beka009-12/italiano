"use client";
import { type FC } from "react";
import scss from "./Main.module.scss";
import Image from "next/image";
import frame1 from "../../../../../public/Frame 10.svg";
import frame2 from "../../../../../public/Frame 9.svg";
import Btn from "@/components/utils/ui/btn/Btn";
import CategoryList from "@/components/utils/ui/Category";
import { useRouter } from "next/navigation";

const foods = [
  {
    id: 1,
    title: "Beer Brewery",
    price: "$24",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk.",
  },
  {
    id: 2,
    title: "Pizza Margherita",
    price: "$15",
    description: "Classic Italian pizza with mozzarella and fresh basil.",
  },
  {
    id: 3,
    title: "Chicken Bryani",
    price: "$20",
    description: "Fragrant rice with spices and tender chicken pieces.",
  },
  {
    id: 4,
    title: "Cheeseburger",
    price: "$12",
    description: "Juicy beef patty with cheddar, lettuce, and tomato.",
  },
  {
    id: 5,
    title: "Tiramisu",
    price: "$10",
    description: "Traditional Italian dessert with mascarpone and coffee.",
  },
  {
    id: 6,
    title: "Sushi Set",
    price: "$30",
    description: "Fresh salmon, tuna, and avocado rolls.",
  },
];

const Main: FC = () => {
  const router = useRouter();
  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.text}>
          <div className={scss.title}>
            <div className={scss.left}>
              <Image src={frame1} alt="img" className={scss.one} />
            </div>
            <h3>Delicious</h3>
            <div className={scss.right}>
              <Image src={frame2} alt="img" className={scss.one} />
            </div>
          </div>
          <h1>
            Exceptional Quality. <br />
            Delightfully Delicious
          </h1>
        </div>
        <div className={scss.content}>
          {/* Слева категории */}
          <div className={scss.category}>
            <CategoryList />
          </div>
          <div className={scss.contentRight}>
            {foods.slice(0, 5).map((food, index) => (
              <div
                onClick={() => router.push("/detail")}
                key={index}
                className={scss.context}
              >
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
        <Btn title="View Full menu" />
      </div>
    </section>
  );
};

export default Main;
