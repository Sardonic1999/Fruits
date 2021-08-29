import "./App.css";
import Fruit from "./Fruit";

const data = [
  {
    id: 1,
    img: "https://im0-tub-ru.yandex.net/i?id=f4d46534b7f50fe94cedc8384fcba94d&n=13",
    title: "Apple",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.99",
  },
  {
    id: 2,
    img: "https://im0-tub-ru.yandex.net/i?id=2900edb6a30dd18c8eee5b8b75e5cd19&n=13",
    title: "Apricot",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.99",
  },
  {
    id: 3,
    img: "https://kurer-sreda.ru/wp-content/uploads/2020/11/bananas_fruit_yellow_fruits_health_food_healthy_food-807088.jpgd_.jpg",
    title: "Banana",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.99",
  },
  {
    id: 4,
    img: "https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kivi-11.jpg",
    title: "Kivi",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.99",
  },
  {
    id: 5,
    img: "https://im0-tub-ru.yandex.net/i?id=6b51a6cc46f58c2d70dc561d9a9cff9e&n=13",
    title: "Pomogrenate",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.99",
  },
  {
    id: 6,
    img: "https://im0-tub-ru.yandex.net/i?id=48a5f9c4f3fbfc0818d140c724f81745&n=13",
    title: "Strawberry",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.99",
  },
  {
    id: 7,
    img: "https://www2.mes-coloriages-preferes.biz/colorino/Images/Large/Nature-Fruits-Ananas-119845.png",
    title: "Pineapple",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.99",
  },
  {
    id: 8,
    img: "https://www.specialtyproduce.com/sppics/12071.png",
    title: "Cucumber",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.99",
  },
];

function App() {
  return (
    <div className="container">
      {data.map((value, index) => {
        return (
          <div>
            <Fruit data={value} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
