import { navbar } from "./header";
import menuItems from "./menuItems";

export default function home() {
  const homeSection = document.createElement("section");

  homeSection.classList.add("home-section");

  homeSection.appendChild(navbar());
  homeSection.appendChild(infoComponent());
  homeSection.appendChild(featuredItems());

  return homeSection;
}

function infoComponent() {
  const infoWrapper = document.createElement("div");
  const logo = document.createElement("p");
  const restaurantDisc = document.createElement("h1");

  infoWrapper.classList.add("info-wrapper");
  logo.classList.add("main-logo", "clr-accent", "ff-accent");
  restaurantDisc.classList.add("rest-disc");

  logo.textContent = "Luna";
  restaurantDisc.textContent = "Delicious Specialties";

  infoWrapper.appendChild(logo);
  infoWrapper.appendChild(restaurantDisc);

  return infoWrapper;
}

function featuredItems() {
  const featuredItemsContainer = document.createElement("div");
  const featuredItemsWrapper = document.createElement("div");

  featuredItemsContainer.classList.add("featured-items");
  featuredItemsWrapper.classList.add("featured-items-wrapper");

  Object.values(menuItems)
    .slice(0, 4)
    .forEach((item) => {
      const featuredItem = document.createElement("div");
      const itemImg = new Image();
      const itemName = document.createElement("p");

      featuredItem.classList.add("featured-item");

      itemImg.src = item.img;
      itemImg.draggable = false;
      itemName.textContent = item.name;

      featuredItem.appendChild(itemImg);
      featuredItem.appendChild(itemName);
      featuredItemsWrapper.appendChild(featuredItem);
    });

  featuredItemsContainer.appendChild(featuredItemsWrapper);

  return featuredItemsContainer;
}
