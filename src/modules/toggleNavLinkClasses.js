export default function toggleNavLinkClasses(element) {
  const items = [...document.getElementsByClassName(`${element}-link`)];
  items.forEach((item) => {
    item.classList.add("active");
  });
}
