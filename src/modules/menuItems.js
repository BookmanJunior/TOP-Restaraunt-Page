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
    ingredients: ["Fish", "Sriracha", "Garlic powder", "Lime juice"],
  },
  item2: {
    name: "Chicken Tostadas",
    img: chickenTostadas,
    price: 8,
    ingredients: [
      "Pinto beans",
      "Refried beans",
      "Sour cream",
      "White corn tortillas",
    ],
  },
  item3: {
    name: "Chicken Quesadillas",
    img: bakedChickenQuesadillas,
    price: 20,
    ingredients: ["Sour cream", "Pepper jack cheese", "Shredded chicken"],
  },
  item4: {
    name: "Chicken Enchiladas",
    img: chickenEnchiladas,
    price: 15,
    ingredients: ["Sour cream", "Easy enchilada sauce", "Shredded chicken"],
  },
  item5: {
    name: "Pico De Gallo",
    img: picoDeGallo,
    price: 10,
    ingredients: ["Tomatoes", "Cilantro", "Black pepper", "Jalapeno pepper"],
  },
  item6: {
    name: "Black Bean Burrito",
    img: blackBeanBurrito,
    price: 12,
    ingredients: [
      "Black beans",
      "Sour cream",
      "Flour tortillas",
      "Tomato",
      "Green pepper",
    ],
  },
};

export default menuItems;
