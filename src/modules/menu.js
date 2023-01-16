import menuItems from "./menuItems";

export default function menuSection() {
  const menuContainer = document.createElement("section");
  const container = document.createElement("div");

  menuContainer.classList.add("menu-section");
  container.classList.add("container");

  menuContainer.appendChild(container);
  container.appendChild(menuNav());
  container.appendChild(menuItemsComponent());

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

function menuItemsComponent() {
  const menuWrapper = document.createElement("div");

  menuWrapper.classList.add("menu-wrapper");

  Object.values(menuItems).forEach((item) => {
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
    orderBtn.classList.add("order-btn");

    itemImg.src = item.img;
    itemTitle.textContent = item.name;
    itemPrice.textContent = `$${item.price}`;
    itemIngredients.textContent = item.ingredients.join(", ");
    orderBtn.textContent = "Order Now";

    itemContainer.append(itemImg, itemInfoContainter);
    itemInfoContainter.append(itemHeader, itemIngredients, orderBtn);
    itemHeader.append(itemTitle, itemPrice);
    menuWrapper.appendChild(itemContainer);
  });

  return menuWrapper;
}
