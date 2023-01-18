import aboutImg from "../assets/about.webp";
import aboutImg2 from "../assets/about-1.webp";

export default function aboutSectionComponent() {
  const aboutSection = document.createElement("section");
  const container = document.createElement("div");

  aboutSection.classList.add("about-section");
  container.classList.add("container");

  container.appendChild(aboutContent());
  aboutSection.appendChild(container);

  return aboutSection;
}

function aboutContent() {
  const aboutWrapper = document.createElement("div");
  const aboutImgsContainer = document.createElement("div");
  const aboutImgContainer = new Image();
  const aboutImg2Container = new Image();
  const aboutTextWrapper = document.createElement("div");
  const aboutTextHeader = document.createElement("div");
  const aboutTextBody = document.createElement("div");
  const aboutTextFooter = document.createElement("div");
  const about = document.createElement("p");
  const restTitle = document.createElement("h2");
  const bodyContent = document.createElement("p");
  const days = document.createElement("p");
  const hours = document.createElement("span");
  const phoneNumber = document.createElement("p");

  aboutWrapper.classList.add("about-content");
  aboutImgsContainer.classList.add("about-imgs-wrapper");
  aboutImgContainer.classList.add("about");
  aboutImg2Container.classList.add("about-2");
  aboutTextWrapper.classList.add("about-text-wrapper");
  aboutTextHeader.classList.add("about-text-header");
  aboutTextBody.classList.add("about-text-body");
  aboutTextFooter.classList.add("about-text-footer");
  about.classList.add("about-title", "clr-accent", "ff-accent");
  restTitle.classList.add("about-restaurant-title");
  phoneNumber.classList.add("phone-number", "clr-accent");
  bodyContent.classList.add("about-text");
  days.classList.add("work-days");
  hours.classList.add("work-hours");

  aboutImgContainer.draggable = false;
  aboutImg2Container.draggable = false;

  aboutImgContainer.src = aboutImg;
  aboutImg2Container.src = aboutImg2;
  about.textContent = "About";
  restTitle.textContent = "Luna Restaurant";
  bodyContent.textContent =
    "A small river named Duden flows by their place and supplies it with the necessary regelialia." +
    "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.";
  days.textContent = "Mon - Fri";
  hours.textContent = " 8 AM - 11 PM";
  phoneNumber.textContent = "+1-978-123-4567";

  days.appendChild(hours);
  aboutImgsContainer.append(aboutImgContainer, aboutImg2Container);
  aboutTextBody.append(bodyContent, days, phoneNumber);
  aboutTextWrapper.append(aboutTextHeader, aboutTextBody, aboutTextFooter);
  aboutWrapper.append(aboutImgsContainer, aboutTextWrapper);
  aboutTextHeader.append(about, restTitle);

  return aboutWrapper;
}
