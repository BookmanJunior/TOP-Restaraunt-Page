import fishTacos from "../assets/fish-tacos.jpg";
import chickenTostadas from "../assets/chicken-tostadas.jpg";
import bakedChickenQuesadillas from "../assets/Baked-Chicken-Quesadillas.jpg";
import chickenEnchiladas from "../assets/chicken-enchiladas.jpg";
import picoDeGallo from "../assets/pico-de-gallo.jpg";
import blackBeanBurrito from "../assets/black-bean-burrito.jpg";

const featuredMenu = {
  item1: {
    name: "Fish Tacos",
    img: fishTacos,
    price: 13,
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

export default function menuSection() {
  const menuContainer = document.createElement("section");

  menuContainer.appendChild(menuItems());

  return menuContainer;
}

function menuItems() {
  const menuWrapper = document.createElement("div");

  menuWrapper.classList.add("menu-wrapper");

  menuWrapper.classList.add("menu-wrapper");
  Object.values(featuredMenu).forEach((item) => {
    const itemContainer = document.createElement("div");
    const itemImg = new Image();
    const itemInfoContainter = document.createElement("div");
    const itemTitle = document.createElement("h2");
    const itemPrice = document.createElement("span");
    const orderBtn = document.createElement("button");

    itemContainer.classList.add("menu-item");
    itemImg.classList.add("item-img");
    itemInfoContainter.classList.add("info-container");

    itemImg.src = item.img;
    itemTitle.textContent = item.name;
    itemPrice.textContent = item.price;
    orderBtn.textContent = "Order Now";

    itemContainer.append(itemImg, itemInfoContainter);
    itemInfoContainter.append(itemTitle, itemPrice, orderBtn);
    menuWrapper.appendChild(itemContainer);
  });

  return menuWrapper;
}
