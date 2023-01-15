import fishTacos from "../assets/fish-tacos.jpg";
import chickenTostadas from "../assets/chicken-tostadas.jpg";
import bakedChickenQuesadillas from "../assets/Baked-Chicken-Quesadillas.jpg";
import chickenEnchiladas from "../assets/chicken-enchiladas.jpg";
import picoDeGallo from "../assets/pico-de-gallo.jpg";
import blackBeanBurrito from "../assets/black-bean-burrito.jpg";

const menuItems = {
  item1: {
    name: "Fish Tacos",
    img: fishTacos,
    price: 13,
    ingredients: ["Fish", "Sriracha", "Garlic Powder", "Lime Juice"],
  },
  item2: {
    name: "Chicken Tostadas",
    img: chickenTostadas,
    price: 8,
  },
  item3: {
    name: "Baked Chicken Quesadillas",
    img: bakedChickenQuesadillas,
    price: 20,
  },
  item4: {
    name: "Chicken Enchiladas",
    img: chickenEnchiladas,
    price: 15,
  },
  item5: {
    name: "Pico De Gallo",
    img: picoDeGallo,
    price: 10,
  },
  item6: {
    name: "Black Bean Burrito",
    img: blackBeanBurrito,
    price: 12,
  },
};

export default menuItems;
