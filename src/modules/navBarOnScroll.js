let lastScroll = 0;

export default function navFloatToggle() {
  const navBar = document.getElementById("mainNav");
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    toggleClassesOnScrollDown(currentScroll, navBar);
    lastScroll = currentScroll;
    return;
  }

  if (currentScroll < lastScroll) {
    toggleClassesOnScrollUp(currentScroll, navBar);
    // reset lastScroll
    if (currentScroll === 0) {
      lastScroll = 0;
    }
  }
}

function toggleClassesOnScrollDown(currentScroll, mainNav) {
  if (currentScroll >= 100) {
    mainNav.classList.add("scrolled");
  }

  if (currentScroll >= 350) {
    mainNav.classList.add("floating");
  }
}

function toggleClassesOnScrollUp(currentScroll, mainNav) {
  if (currentScroll <= 350) {
    mainNav.classList.add("sleep");
  }

  if (currentScroll <= 250) {
    mainNav.classList.remove("floating");
  }

  if (currentScroll <= 150) {
    mainNav.classList.remove("sleep", "scrolled");
  }
}
