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

export default function menuSection() {
  const menuContainer = document.createElement("section");
  const container = document.createElement("div");

  menuContainer.classList.add("menu-section");
  container.classList.add("container");

  menuContainer.appendChild(container);
  container.appendChild(menuNav());
  container.appendChild(menuItems());

  return menuContainer;
}

function menuNav() {
  const navNames = ["Breakfast", "Lunch", "Dinner", "Drinks", "Desserts"];

  const navList = document.createElement("ul");

  navList.classList.add("menu-links");

  navNames.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.textContent = item;
    if (item === "Dinner") {
      liElement.classList.add("menu-nav-item", "menu-link-active");
    }
    liElement.classList.add("menu-nav-item");

    navList.appendChild(liElement);
  });

  return navList;
}

function menuItems() {
  const menuWrapper = document.createElement("div");

  menuWrapper.classList.add("menu-wrapper");

  menuWrapper.classList.add("menu-wrapper");
  Object.values(featuredMenu).forEach((item) => {
    const itemContainer = document.createElement("div");
    const itemImg = new Image();
    const itemInfoContainter = document.createElement("div");
    const itemHeader = document.createElement("div");
    const itemTitle = document.createElement("h2");
    const itemPrice = document.createElement("span");
    const itemIngredients = document.createElement("p");
    const orderBtn = document.createElement("button");

    itemContainer.classList.add("menu-item");
    itemImg.classList.add("item-img");
    itemTitle.classList.add("item-name");
    itemIngredients.classList.add("item-ingredients");
    itemPrice.classList.add("item-price");
    itemInfoContainter.classList.add("info-container");
    itemHeader.classList.add("item-header");

    itemImg.src = item.img;
    itemTitle.textContent = item.name;
    itemPrice.textContent = `$${item.price}`;
    itemIngredients.textContent = item.ingredients;
    orderBtn.textContent = "Order Now";

    itemContainer.append(itemImg, itemInfoContainter);
    itemInfoContainter.append(itemHeader, itemIngredients, orderBtn);
    itemHeader.append(itemTitle, itemPrice);
    menuWrapper.appendChild(itemContainer);
  });

  return menuWrapper;
}
