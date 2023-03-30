/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/header.jpg */ "./src/assets/header.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/backgroundImg.jpg */ "./src/assets/backgroundImg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --color-primary: #fff;\r\n  --color-accent: #c8a97e;\r\n  --color-gray: #666666;\r\n  --color-black: #000000;\r\n  --header-overlay: linear-gradient(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.5));\r\n  --background-overlay: linear-gradient(rgb(0 0 0 / 0.7), rgb(0 0 0 / 0.7));\r\n  --border-settings: 1px solid rgb(255 255 255 / 0.1);\r\n  --ff-primary: \"Poppins\", Arial, sans-serif;\r\n  --ff-accent: \"Great Vibes\", \"Comic Sans MS\", \"Comic Sans\", cursive;\r\n  --ff-bold: 900;\r\n  --ff-semi-bold: 600;\r\n  --stagger-delay: 50ms;\r\n}\r\n\r\n/*\r\n  1. Use a more-intuitive box-sizing model.\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n/*\r\n    2. Remove default margin & padding\r\n  */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/*\r\n    3. Allow percentage-based heights in the application\r\n  */\r\nhtml,\r\nbody {\r\n  height: 100vh;\r\n}\r\n/*\r\n    Typographic tweaks!\r\n    4. Add accessible line-height\r\n    5. Improve text rendering\r\n  */\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n/*\r\n    6. Improve media defaults\r\n  */\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n/*\r\n    7. Remove built-in form typography styles\r\n  */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n/*\r\n    8. Avoid text overflows\r\n  */\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n/*\r\n    9. Create a root stacking context\r\n  */\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n/* General styles */\r\n\r\n#content {\r\n  font-family: var(--ff-primary);\r\n}\r\n\r\n.menu-section,\r\n.about-section {\r\n  padding-block: 7em;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  font-size: 0.9rem;\r\n  font-weight: 400;\r\n}\r\n\r\nli,\r\nbutton,\r\n.logo-header {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Header styles */\r\nheader {\r\n  min-height: 450px;\r\n  background-image: var(--header-overlay), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  color: var(--color-primary);\r\n  display: grid;\r\n  grid-template-rows: auto 1fr 200px;\r\n}\r\n\r\n.main-nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  border-bottom: var(--border-settings);\r\n  padding-block: 1em;\r\n  position: absolute;\r\n  z-index: 999;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.main-nav.scrolled {\r\n  position: fixed;\r\n  padding-block: 0.5em;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-black);\r\n  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);\r\n  transform: translateY(-100px);\r\n}\r\n\r\n.main-nav.sleep {\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav.floating {\r\n  transform: translateY(0);\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav-wrapper,\r\n.container {\r\n  width: min(1140px, 90%);\r\n}\r\n\r\n.main-nav-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo-header {\r\n  font-size: 1.5rem;\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.main-nav-links {\r\n  gap: 2.5em;\r\n}\r\n\r\n.nav-item,\r\n.nav-item:is(.active, .active:hover, :hover) {\r\n  transition: 200ms ease-in;\r\n}\r\n\r\n.nav-item:is(.active, :hover) {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.nav-item.active:hover {\r\n  color: var(--color-primary);\r\n}\r\n\r\n.main-nav.floating .nav-item.active:hover {\r\n  color: var(--color-black);\r\n}\r\n\r\n.nav-toggler {\r\n  display: none;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  color: rgb(255 255 255 / 0.5);\r\n  letter-spacing: 1.2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.hamburger {\r\n  pointer-events: none;\r\n}\r\n\r\n.nav-toggler .line {\r\n  fill: var(--color-primary);\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in 200ms,\r\n    transform 200ms ease-in, opacity 0ms 200ms;\r\n  transform-origin: center;\r\n}\r\n\r\n.nav-toggler .line.open {\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in,\r\n    transform 200ms ease-in 200ms, opacity 0ms 200ms;\r\n}\r\n\r\n.main-nav.floating .line {\r\n  fill: var(--color-black);\r\n}\r\n\r\n.nav-toggler:hover .line {\r\n  fill: var(--color-accent);\r\n}\r\n\r\n.nav-toggler :is(.line-top.open, .line-bottom.open) {\r\n  y: 45px;\r\n}\r\n\r\n.nav-toggler .line-top.open {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.nav-toggler .line-bottom.open {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.nav-toggler .line-middle.open {\r\n  opacity: 0;\r\n}\r\n\r\n.nav-collapse {\r\n  display: block;\r\n  max-height: 0;\r\n  flex-basis: 100%;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse > ul {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  opacity: 0;\r\n  gap: 2em;\r\n  padding-block: 1em;\r\n  visibility: hidden;\r\n}\r\n\r\n.nav-collapse.display {\r\n  max-height: 150px;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse.display .nav-collapse-links {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity 100ms ease-in-out 150ms;\r\n}\r\n\r\n@media screen and (min-width: 981px) {\r\n  .nav-collapse.display,\r\n  .nav-collapse > ul {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .main-nav {\r\n    color: var(--color-primary);\r\n    background-color: var(--color-black);\r\n    border-bottom: none;\r\n    position: static;\r\n  }\r\n\r\n  .main-nav-links {\r\n    display: none;\r\n  }\r\n\r\n  .nav-toggler {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.hero-wrapper {\r\n  grid-row: 3;\r\n  place-self: center;\r\n}\r\n\r\n.hero-text {\r\n  font-size: 3.125rem;\r\n}\r\n\r\n/* Home styles */\r\n.home-section {\r\n  height: 100vh;\r\n  background-image: var(--background-overlay),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: cover;\r\n  background-position: 50% 10%;\r\n  font-family: var(--ff-primary);\r\n  color: var(--color-primary);\r\n\r\n  display: grid;\r\n  grid-template-rows: 1fr 0.3fr;\r\n  position: relative;\r\n}\r\n\r\n.info-wrapper {\r\n  align-self: center;\r\n  text-align: center;\r\n  line-height: 1;\r\n}\r\n\r\n.main-logo {\r\n  font-size: 5rem;\r\n}\r\n\r\n.rest-disc {\r\n  font-size: clamp(3rem, 1.75rem + 4vw, 4rem);\r\n  text-transform: uppercase;\r\n}\r\n\r\n.featured-items {\r\n  border-top: var(--border-settings);\r\n  color: var(--color-primary);\r\n  font-size: 1.125rem;\r\n  width: 100%;\r\n}\r\n\r\n.featured-items-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  align-items: center;\r\n  justify-items: center;\r\n  row-gap: 0.5em;\r\n  height: 100%;\r\n  padding-block: 1em;\r\n}\r\n\r\n.featured-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 1em;\r\n}\r\n\r\n.featured-item img {\r\n  border-radius: 50%;\r\n  width: 90px;\r\n  aspect-ratio: 1 / 1;\r\n  object-fit: cover;\r\n  user-select: none;\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .home-section {\r\n    height: calc(100vh - 69px);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n  .home-section {\r\n    height: calc(100vh + 570px);\r\n  }\r\n\r\n  .featured-items-wrapper {\r\n    grid-template-columns: 1fr;\r\n    padding-block: 2em;\r\n  }\r\n}\r\n\r\n/* Menu style */\r\n\r\n.container {\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-links {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(120px, 100%), 1fr));\r\n  text-align: center;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.menu-links > li {\r\n  font-size: 1.2rem;\r\n  font-weight: var(--ff-semi-bold);\r\n  padding: 1em;\r\n}\r\n\r\n.menu-links > li:hover,\r\n.menu-link-active {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  position: relative;\r\n}\r\n\r\n.menu-link-active::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-left: 10px solid transparent;\r\n  border-right: 10px solid transparent;\r\n  border-top: 10px solid var(--color-accent);\r\n  bottom: -10px;\r\n  right: 0;\r\n  left: 0;\r\n  width: 0;\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));\r\n}\r\n\r\n.menu-item {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.menu-item > img {\r\n  height: 100%;\r\n  aspect-ratio: 2 / 1.5;\r\n  object-fit: cover;\r\n}\r\n\r\n.menu-item:nth-child(3) img,\r\n.menu-item:nth-child(4) img {\r\n  order: 1;\r\n}\r\n\r\n.info-container {\r\n  border: 1px solid #e6e6e6;\r\n  padding: 1em;\r\n\r\n  display: grid;\r\n  align-content: space-around;\r\n  row-gap: 5px;\r\n}\r\n\r\n.order-btn {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-accent);\r\n  outline: none;\r\n  padding: 0.5em 1em;\r\n  justify-self: start;\r\n}\r\n\r\n.order-btn:is(:hover, :active) {\r\n  background-color: var(--color-primary);\r\n  color: var(--color-accent);\r\n}\r\n\r\n.order-btn,\r\n.menu-item {\r\n  transition: 200ms ease-in;\r\n}\r\n\r\n:is(.order-btn, .menu-nav-item):is(:hover, :active) {\r\n  transition: all 200ms ease-in;\r\n}\r\n\r\n.item-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  line-height: 1.3;\r\n}\r\n\r\n.item-header > * {\r\n  font-size: 1.3rem;\r\n  font-weight: var(--ff-semi-bold);\r\n}\r\n\r\n.item-header > h2 {\r\n  max-width: 150px;\r\n}\r\n\r\n.item-price {\r\n  color: var(--color-accent);\r\n}\r\n\r\n@media screen and (max-width: 600px), (max-width: 700px) {\r\n  .menu-links {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item > img {\r\n    aspect-ratio: 3 / 1.5;\r\n  }\r\n\r\n  .menu-item:nth-child(3) img,\r\n  .menu-item:nth-child(4) img {\r\n    order: 0;\r\n  }\r\n\r\n  .menu-link-active::after {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/* About styles */\r\n\r\n.about-content {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 1fr;\r\n  gap: 2em;\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1em;\r\n}\r\n\r\n.about-imgs-wrapper > img {\r\n  width: 100%;\r\n  height: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n.about {\r\n  transform: translateY(-1.5em);\r\n}\r\n\r\n.about-text-header {\r\n  display: grid;\r\n  gap: 3em;\r\n  line-height: 1;\r\n}\r\n\r\n.about-title {\r\n  font-size: 6.25rem;\r\n  grid-row: 1;\r\n  grid-column: 1;\r\n}\r\n\r\n.about-restaurant-title {\r\n  font-size: 3.125rem;\r\n  grid-row: 1 / 3;\r\n  grid-column: 1;\r\n  align-self: end;\r\n  max-width: 300px;\r\n}\r\n\r\n.about-text,\r\n.work-days {\r\n  font-size: 1rem;\r\n  line-height: 2;\r\n  color: var(--color-gray);\r\n}\r\n\r\n.about-text {\r\n  margin-block: 1.5em 1em;\r\n  max-width: 400px;\r\n}\r\n\r\n.work-days {\r\n  margin-block: 1em;\r\n}\r\n\r\n.work-hours {\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.phone-number {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n  .about {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  .about-content {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* Animation */\r\n\r\n.info-wrapper,\r\n.hero-wrapper {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: translateY(35px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.featured-item,\r\n.menu-nav-item,\r\n.about-imgs-wrapper,\r\n.about-text-wrapper,\r\n.menu-item {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n/* :is(.featured-item, .menu-nav-item):is(:nth-child(1)) {\r\n  animation-delay: 0ms;\r\n} */\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(2)) {\r\n  animation-delay: var(--stagger-delay);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(3)) {\r\n  animation-delay: calc(var(--stagger-delay) + 25ms);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(4)) {\r\n  animation-delay: calc(var(--stagger-delay) + 50ms);\r\n}\r\n\r\n:is(.menu-nav-item, .menu-item):is(:nth-child(5)) {\r\n  animation-delay: calc(var(--stagger-delay) + 75ms);\r\n}\r\n\r\n:is(.menu-item):is(:nth-child(6)) {\r\n  animation-delay: calc(var(--stagger-delay) + 95ms);\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  animation-delay: 0;\r\n}\r\n\r\n.about-text-wrapper {\r\n  animation-delay: 25ms;\r\n}\r\n\r\n/* Utility styles */\r\n\r\n.clr-accent {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.ff-accent {\r\n  font-family: var(--ff-accent);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap\");\r\n\r\n:root {\r\n  --color-primary: #fff;\r\n  --color-accent: #c8a97e;\r\n  --color-gray: #666666;\r\n  --color-black: #000000;\r\n  --header-overlay: linear-gradient(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.5));\r\n  --background-overlay: linear-gradient(rgb(0 0 0 / 0.7), rgb(0 0 0 / 0.7));\r\n  --border-settings: 1px solid rgb(255 255 255 / 0.1);\r\n  --ff-primary: \"Poppins\", Arial, sans-serif;\r\n  --ff-accent: \"Great Vibes\", \"Comic Sans MS\", \"Comic Sans\", cursive;\r\n  --ff-bold: 900;\r\n  --ff-semi-bold: 600;\r\n  --stagger-delay: 50ms;\r\n}\r\n\r\n/*\r\n  1. Use a more-intuitive box-sizing model.\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n/*\r\n    2. Remove default margin & padding\r\n  */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/*\r\n    3. Allow percentage-based heights in the application\r\n  */\r\nhtml,\r\nbody {\r\n  height: 100vh;\r\n}\r\n/*\r\n    Typographic tweaks!\r\n    4. Add accessible line-height\r\n    5. Improve text rendering\r\n  */\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n/*\r\n    6. Improve media defaults\r\n  */\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n/*\r\n    7. Remove built-in form typography styles\r\n  */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n/*\r\n    8. Avoid text overflows\r\n  */\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n/*\r\n    9. Create a root stacking context\r\n  */\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n/* General styles */\r\n\r\n#content {\r\n  font-family: var(--ff-primary);\r\n}\r\n\r\n.menu-section,\r\n.about-section {\r\n  padding-block: 7em;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  font-size: 0.9rem;\r\n  font-weight: 400;\r\n}\r\n\r\nli,\r\nbutton,\r\n.logo-header {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Header styles */\r\nheader {\r\n  min-height: 450px;\r\n  background-image: var(--header-overlay), url(\"../assets/header.jpg\");\r\n  background-size: cover;\r\n  color: var(--color-primary);\r\n  display: grid;\r\n  grid-template-rows: auto 1fr 200px;\r\n}\r\n\r\n.main-nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  border-bottom: var(--border-settings);\r\n  padding-block: 1em;\r\n  position: absolute;\r\n  z-index: 999;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.main-nav.scrolled {\r\n  position: fixed;\r\n  padding-block: 0.5em;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-black);\r\n  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);\r\n  transform: translateY(-100px);\r\n}\r\n\r\n.main-nav.sleep {\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav.floating {\r\n  transform: translateY(0);\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav-wrapper,\r\n.container {\r\n  width: min(1140px, 90%);\r\n}\r\n\r\n.main-nav-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo-header {\r\n  font-size: 1.5rem;\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.main-nav-links {\r\n  gap: 2.5em;\r\n}\r\n\r\n.nav-item,\r\n.nav-item:is(.active, .active:hover, :hover) {\r\n  transition: 200ms ease-in;\r\n}\r\n\r\n.nav-item:is(.active, :hover) {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.nav-item.active:hover {\r\n  color: var(--color-primary);\r\n}\r\n\r\n.main-nav.floating .nav-item.active:hover {\r\n  color: var(--color-black);\r\n}\r\n\r\n.nav-toggler {\r\n  display: none;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  color: rgb(255 255 255 / 0.5);\r\n  letter-spacing: 1.2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.hamburger {\r\n  pointer-events: none;\r\n}\r\n\r\n.nav-toggler .line {\r\n  fill: var(--color-primary);\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in 200ms,\r\n    transform 200ms ease-in, opacity 0ms 200ms;\r\n  transform-origin: center;\r\n}\r\n\r\n.nav-toggler .line.open {\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in,\r\n    transform 200ms ease-in 200ms, opacity 0ms 200ms;\r\n}\r\n\r\n.main-nav.floating .line {\r\n  fill: var(--color-black);\r\n}\r\n\r\n.nav-toggler:hover .line {\r\n  fill: var(--color-accent);\r\n}\r\n\r\n.nav-toggler :is(.line-top.open, .line-bottom.open) {\r\n  y: 45px;\r\n}\r\n\r\n.nav-toggler .line-top.open {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.nav-toggler .line-bottom.open {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.nav-toggler .line-middle.open {\r\n  opacity: 0;\r\n}\r\n\r\n.nav-collapse {\r\n  display: block;\r\n  max-height: 0;\r\n  flex-basis: 100%;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse > ul {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  opacity: 0;\r\n  gap: 2em;\r\n  padding-block: 1em;\r\n  visibility: hidden;\r\n}\r\n\r\n.nav-collapse.display {\r\n  max-height: 150px;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse.display .nav-collapse-links {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity 100ms ease-in-out 150ms;\r\n}\r\n\r\n@media screen and (min-width: 981px) {\r\n  .nav-collapse.display,\r\n  .nav-collapse > ul {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .main-nav {\r\n    color: var(--color-primary);\r\n    background-color: var(--color-black);\r\n    border-bottom: none;\r\n    position: static;\r\n  }\r\n\r\n  .main-nav-links {\r\n    display: none;\r\n  }\r\n\r\n  .nav-toggler {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.hero-wrapper {\r\n  grid-row: 3;\r\n  place-self: center;\r\n}\r\n\r\n.hero-text {\r\n  font-size: 3.125rem;\r\n}\r\n\r\n/* Home styles */\r\n.home-section {\r\n  height: 100vh;\r\n  background-image: var(--background-overlay),\r\n    url(\"../assets/backgroundImg.jpg\");\r\n  background-size: cover;\r\n  background-position: 50% 10%;\r\n  font-family: var(--ff-primary);\r\n  color: var(--color-primary);\r\n\r\n  display: grid;\r\n  grid-template-rows: 1fr 0.3fr;\r\n  position: relative;\r\n}\r\n\r\n.info-wrapper {\r\n  align-self: center;\r\n  text-align: center;\r\n  line-height: 1;\r\n}\r\n\r\n.main-logo {\r\n  font-size: 5rem;\r\n}\r\n\r\n.rest-disc {\r\n  font-size: clamp(3rem, 1.75rem + 4vw, 4rem);\r\n  text-transform: uppercase;\r\n}\r\n\r\n.featured-items {\r\n  border-top: var(--border-settings);\r\n  color: var(--color-primary);\r\n  font-size: 1.125rem;\r\n  width: 100%;\r\n}\r\n\r\n.featured-items-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  align-items: center;\r\n  justify-items: center;\r\n  row-gap: 0.5em;\r\n  height: 100%;\r\n  padding-block: 1em;\r\n}\r\n\r\n.featured-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 1em;\r\n}\r\n\r\n.featured-item img {\r\n  border-radius: 50%;\r\n  width: 90px;\r\n  aspect-ratio: 1 / 1;\r\n  object-fit: cover;\r\n  user-select: none;\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .home-section {\r\n    height: calc(100vh - 69px);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n  .home-section {\r\n    height: calc(100vh + 570px);\r\n  }\r\n\r\n  .featured-items-wrapper {\r\n    grid-template-columns: 1fr;\r\n    padding-block: 2em;\r\n  }\r\n}\r\n\r\n/* Menu style */\r\n\r\n.container {\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-links {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(120px, 100%), 1fr));\r\n  text-align: center;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.menu-links > li {\r\n  font-size: 1.2rem;\r\n  font-weight: var(--ff-semi-bold);\r\n  padding: 1em;\r\n}\r\n\r\n.menu-links > li:hover,\r\n.menu-link-active {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  position: relative;\r\n}\r\n\r\n.menu-link-active::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-left: 10px solid transparent;\r\n  border-right: 10px solid transparent;\r\n  border-top: 10px solid var(--color-accent);\r\n  bottom: -10px;\r\n  right: 0;\r\n  left: 0;\r\n  width: 0;\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));\r\n}\r\n\r\n.menu-item {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.menu-item > img {\r\n  height: 100%;\r\n  aspect-ratio: 2 / 1.5;\r\n  object-fit: cover;\r\n}\r\n\r\n.menu-item:nth-child(3) img,\r\n.menu-item:nth-child(4) img {\r\n  order: 1;\r\n}\r\n\r\n.info-container {\r\n  border: 1px solid #e6e6e6;\r\n  padding: 1em;\r\n\r\n  display: grid;\r\n  align-content: space-around;\r\n  row-gap: 5px;\r\n}\r\n\r\n.order-btn {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-accent);\r\n  outline: none;\r\n  padding: 0.5em 1em;\r\n  justify-self: start;\r\n}\r\n\r\n.order-btn:is(:hover, :active) {\r\n  background-color: var(--color-primary);\r\n  color: var(--color-accent);\r\n}\r\n\r\n.order-btn,\r\n.menu-item {\r\n  transition: 200ms ease-in;\r\n}\r\n\r\n:is(.order-btn, .menu-nav-item):is(:hover, :active) {\r\n  transition: all 200ms ease-in;\r\n}\r\n\r\n.item-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  line-height: 1.3;\r\n}\r\n\r\n.item-header > * {\r\n  font-size: 1.3rem;\r\n  font-weight: var(--ff-semi-bold);\r\n}\r\n\r\n.item-header > h2 {\r\n  max-width: 150px;\r\n}\r\n\r\n.item-price {\r\n  color: var(--color-accent);\r\n}\r\n\r\n@media screen and (max-width: 600px), (max-width: 700px) {\r\n  .menu-links {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item > img {\r\n    aspect-ratio: 3 / 1.5;\r\n  }\r\n\r\n  .menu-item:nth-child(3) img,\r\n  .menu-item:nth-child(4) img {\r\n    order: 0;\r\n  }\r\n\r\n  .menu-link-active::after {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/* About styles */\r\n\r\n.about-content {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 1fr;\r\n  gap: 2em;\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1em;\r\n}\r\n\r\n.about-imgs-wrapper > img {\r\n  width: 100%;\r\n  height: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n.about {\r\n  transform: translateY(-1.5em);\r\n}\r\n\r\n.about-text-header {\r\n  display: grid;\r\n  gap: 3em;\r\n  line-height: 1;\r\n}\r\n\r\n.about-title {\r\n  font-size: 6.25rem;\r\n  grid-row: 1;\r\n  grid-column: 1;\r\n}\r\n\r\n.about-restaurant-title {\r\n  font-size: 3.125rem;\r\n  grid-row: 1 / 3;\r\n  grid-column: 1;\r\n  align-self: end;\r\n  max-width: 300px;\r\n}\r\n\r\n.about-text,\r\n.work-days {\r\n  font-size: 1rem;\r\n  line-height: 2;\r\n  color: var(--color-gray);\r\n}\r\n\r\n.about-text {\r\n  margin-block: 1.5em 1em;\r\n  max-width: 400px;\r\n}\r\n\r\n.work-days {\r\n  margin-block: 1em;\r\n}\r\n\r\n.work-hours {\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.phone-number {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n  .about {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  .about-content {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* Animation */\r\n\r\n.info-wrapper,\r\n.hero-wrapper {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: translateY(35px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.featured-item,\r\n.menu-nav-item,\r\n.about-imgs-wrapper,\r\n.about-text-wrapper,\r\n.menu-item {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n/* :is(.featured-item, .menu-nav-item):is(:nth-child(1)) {\r\n  animation-delay: 0ms;\r\n} */\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(2)) {\r\n  animation-delay: var(--stagger-delay);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(3)) {\r\n  animation-delay: calc(var(--stagger-delay) + 25ms);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(4)) {\r\n  animation-delay: calc(var(--stagger-delay) + 50ms);\r\n}\r\n\r\n:is(.menu-nav-item, .menu-item):is(:nth-child(5)) {\r\n  animation-delay: calc(var(--stagger-delay) + 75ms);\r\n}\r\n\r\n:is(.menu-item):is(:nth-child(6)) {\r\n  animation-delay: calc(var(--stagger-delay) + 95ms);\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  animation-delay: 0;\r\n}\r\n\r\n.about-text-wrapper {\r\n  animation-delay: 25ms;\r\n}\r\n\r\n/* Utility styles */\r\n\r\n.clr-accent {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.ff-accent {\r\n  font-family: var(--ff-accent);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutSectionComponent)
/* harmony export */ });
/* harmony import */ var _assets_about_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/about.webp */ "./src/assets/about.webp");
/* harmony import */ var _assets_about_1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/about-1.webp */ "./src/assets/about-1.webp");



function aboutSectionComponent() {
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

  aboutWrapper.classList.add("about-content");
  aboutImgsContainer.classList.add("about-imgs-wrapper");
  aboutImgContainer.classList.add("about");
  aboutImg2Container.classList.add("about-2");

  aboutImgContainer.draggable = false;
  aboutImg2Container.draggable = false;

  aboutImgContainer.src = _assets_about_webp__WEBPACK_IMPORTED_MODULE_0__;
  aboutImg2Container.src = _assets_about_1_webp__WEBPACK_IMPORTED_MODULE_1__;

  aboutImgsContainer.append(aboutImgContainer, aboutImg2Container);
  aboutWrapper.append(aboutImgsContainer, aboutBodyText());

  return aboutWrapper;
}

function aboutBodyText() {
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

  about.textContent = "About";
  restTitle.textContent = "Luna Restaurant";
  bodyContent.textContent =
    "A small river named Duden flows by their place and supplies it with the necessary regelialia." +
    "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.";
  days.textContent = "Mon - Fri";
  hours.textContent = " 8 AM - 11 PM";
  phoneNumber.textContent = "+1-978-123-4567";

  days.appendChild(hours);
  aboutTextBody.append(bodyContent, days, phoneNumber);
  aboutTextWrapper.append(aboutTextHeader, aboutTextBody, aboutTextFooter);
  aboutTextHeader.append(about, restTitle);

  return aboutTextWrapper;
}


/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
function navbar() {
  const links = ["Home", "Menu", "About"];

  const navElement = document.createElement("nav");
  const navWrapper = document.createElement("div");
  const logo = document.createElement("p");
  const navLinks = document.createElement("ul");
  const navLinksCopy = navLinks.cloneNode(true);
  const navToggler = document.createElement("button");
  const navCollapse = document.createElement("div");

  navElement.id = "mainNav";
  navToggler.id = "navToggler";
  navElement.classList.add("main-nav");
  navWrapper.classList.add("main-nav-wrapper");
  navLinks.classList.add("main-nav-links");
  logo.classList.add("logo-header");
  navToggler.classList.add("nav-toggler");
  navCollapse.classList.add("nav-collapse");
  navLinksCopy.classList.add("nav-collapse-links");
  logo.textContent = "Luna";

  navElement.appendChild(navWrapper);
  navWrapper.appendChild(logo);
  navWrapper.appendChild(navLinks);
  navWrapper.appendChild(navToggler);
  navWrapper.appendChild(navCollapse);
  navToggler.appendChild(svgHam());
  navCollapse.appendChild(navLinksCopy);

  links.forEach((link) => {
    const li = document.createElement("li");
    li.textContent = link;
    li.classList.add("nav-item", `${link.toLowerCase()}-link`);
    navLinks.appendChild(li);
    navLinksCopy.appendChild(li.cloneNode(true));
  });

  return navElement;
}

function header(page) {
  const headerElement = document.createElement("header");
  const heroWrapper = document.createElement("div");
  const heroText = document.createElement("h1");

  heroText.textContent = page;

  heroWrapper.classList.add("hero-wrapper");
  heroText.classList.add("hero-text");

  heroWrapper.appendChild(heroText);
  headerElement.appendChild(heroWrapper);

  return headerElement;
}



function svgHam() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const rectOne = rectComponent("line-top", "25");
  const rectTwo = rectComponent("line-middle", "45");
  const rectThree = rectComponent("line-bottom", "65");

  svg.classList.add("hamburger");

  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("width", "35");

  svg.append(rectOne, rectTwo, rectThree);

  return svg;
}

function rectComponent(classTwo, y, x = 10, classOne = "line") {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  rect.classList.add(classOne, classTwo);

  rect.setAttribute("width", "80");
  rect.setAttribute("height", "10");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("rx", "5");
  rect.setAttribute("fill", "white");

  return rect;
}


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ "./src/modules/menuItems.js");


function home() {
  const homeSection = document.createElement("section");

  homeSection.classList.add("home-section");

  homeSection.append(infoComponent(), featuredItems());

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
  const featuredItemsContainer = document.createElement("section");
  const featuredItemsWrapper = document.createElement("div");

  featuredItemsContainer.classList.add("featured-items");
  featuredItemsWrapper.classList.add("featured-items-wrapper");

  Object.values(_menuItems__WEBPACK_IMPORTED_MODULE_0__["default"])
    .slice(0, 4)
    .forEach((item) => {
      const featuredItem = document.createElement("div");
      const itemImg = new Image();
      const itemName = document.createElement("p");

      featuredItem.classList.add("featured-item");

      itemImg.src = item.img;
      itemImg.alt = item.name;
      itemImg.draggable = false;
      itemName.textContent = item.name;

      featuredItem.appendChild(itemImg);
      featuredItem.appendChild(itemName);
      featuredItemsWrapper.appendChild(featuredItem);
    });

  featuredItemsContainer.appendChild(featuredItemsWrapper);

  return featuredItemsContainer;
}


/***/ }),

/***/ "./src/modules/initialPage.js":
/*!************************************!*\
  !*** ./src/modules/initialPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialPage)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/modules/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");



function initialPage() {
  document.getElementById("content").append((0,_header__WEBPACK_IMPORTED_MODULE_0__.navbar)(), (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
  const homeLinks = document.querySelectorAll(".home-link");
  homeLinks.forEach((link) => {
    link.classList.add("active");
  });
}


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuSection)
/* harmony export */ });
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ "./src/modules/menuItems.js");


function menuSection() {
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

  Object.values(_menuItems__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach((item) => {
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
    itemImg.alt = item.name;
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


/***/ }),

/***/ "./src/modules/menuItems.js":
/*!**********************************!*\
  !*** ./src/modules/menuItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_fish_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/fish-tacos.jpg */ "./src/assets/fish-tacos.jpg");
/* harmony import */ var _assets_chicken_tostadas_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/chicken-tostadas.jpg */ "./src/assets/chicken-tostadas.jpg");
/* harmony import */ var _assets_Baked_Chicken_Quesadillas_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Baked-Chicken-Quesadillas.jpg */ "./src/assets/Baked-Chicken-Quesadillas.jpg");
/* harmony import */ var _assets_chicken_enchiladas_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/chicken-enchiladas.jpg */ "./src/assets/chicken-enchiladas.jpg");
/* harmony import */ var _assets_pico_de_gallo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/pico-de-gallo.jpg */ "./src/assets/pico-de-gallo.jpg");
/* harmony import */ var _assets_black_bean_burrito_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/black-bean-burrito.jpg */ "./src/assets/black-bean-burrito.jpg");







const menuItems = {
  item1: {
    name: "Fish Tacos",
    img: _assets_fish_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__,
    price: 13,
    ingredients: ["Fish", "Sriracha", "Garlic powder", "Lime juice"],
  },
  item2: {
    name: "Chicken Tostadas",
    img: _assets_chicken_tostadas_jpg__WEBPACK_IMPORTED_MODULE_1__,
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
    img: _assets_Baked_Chicken_Quesadillas_jpg__WEBPACK_IMPORTED_MODULE_2__,
    price: 20,
    ingredients: ["Sour cream", "Pepper jack cheese", "Shredded chicken"],
  },
  item4: {
    name: "Chicken Enchiladas",
    img: _assets_chicken_enchiladas_jpg__WEBPACK_IMPORTED_MODULE_3__,
    price: 15,
    ingredients: ["Sour cream", "Easy enchilada sauce", "Shredded chicken"],
  },
  item5: {
    name: "Pico De Gallo",
    img: _assets_pico_de_gallo_jpg__WEBPACK_IMPORTED_MODULE_4__,
    price: 10,
    ingredients: ["Tomatoes", "Cilantro", "Black pepper", "Jalapeno pepper"],
  },
  item6: {
    name: "Black Bean Burrito",
    img: _assets_black_bean_burrito_jpg__WEBPACK_IMPORTED_MODULE_5__,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItems);


/***/ }),

/***/ "./src/modules/navBarFunctions.js":
/*!****************************************!*\
  !*** ./src/modules/navBarFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navBarToggle": () => (/* binding */ navBarToggle),
/* harmony export */   "navLinkClassToggle": () => (/* binding */ navLinkClassToggle)
/* harmony export */ });
function navBarToggle(e) {
  if (e.target.matches(".nav-toggler")) {
    const navCollapse = document.querySelector(".nav-collapse");
    const navLines = [...document.getElementsByClassName("line")];

    navCollapse.classList.toggle("display");
    navLines.forEach((line) => {
      line.classList.toggle("open");
    });
  }
}

function navLinkClassToggle(element) {
  const items = [...document.getElementsByClassName(`${element}-link`)];
  items.forEach((item) => {
    item.classList.add("active");
  });
}




/***/ }),

/***/ "./src/modules/navBarOnScroll.js":
/*!***************************************!*\
  !*** ./src/modules/navBarOnScroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navFloatToggle)
/* harmony export */ });
let lastScroll = 0;

function navFloatToggle() {
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


/***/ }),

/***/ "./src/assets/Baked-Chicken-Quesadillas.jpg":
/*!**************************************************!*\
  !*** ./src/assets/Baked-Chicken-Quesadillas.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Baked-Chicken-Quesadillasd7f31c1d35828c9ec3da.jpg";

/***/ }),

/***/ "./src/assets/about-1.webp":
/*!*********************************!*\
  !*** ./src/assets/about-1.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/about-110ba71405b00006deb3c.webp";

/***/ }),

/***/ "./src/assets/about.webp":
/*!*******************************!*\
  !*** ./src/assets/about.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/aboutea4d6ccbcb93129f98ff.webp";

/***/ }),

/***/ "./src/assets/backgroundImg.jpg":
/*!**************************************!*\
  !*** ./src/assets/backgroundImg.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/backgroundImg3aba02fe33129a779116.jpg";

/***/ }),

/***/ "./src/assets/black-bean-burrito.jpg":
/*!*******************************************!*\
  !*** ./src/assets/black-bean-burrito.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/black-bean-burrito94b5a48938f6728ab3f8.jpg";

/***/ }),

/***/ "./src/assets/chicken-enchiladas.jpg":
/*!*******************************************!*\
  !*** ./src/assets/chicken-enchiladas.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/chicken-enchiladascb49dd995fa3461af7f8.jpg";

/***/ }),

/***/ "./src/assets/chicken-tostadas.jpg":
/*!*****************************************!*\
  !*** ./src/assets/chicken-tostadas.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/chicken-tostadas8850a8b96eb5741779aa.jpg";

/***/ }),

/***/ "./src/assets/fish-tacos.jpg":
/*!***********************************!*\
  !*** ./src/assets/fish-tacos.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fish-tacos54d33caaad0c24ea7813.jpg";

/***/ }),

/***/ "./src/assets/header.jpg":
/*!*******************************!*\
  !*** ./src/assets/header.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/header812993bdbd4df0ed3e6e.jpg";

/***/ }),

/***/ "./src/assets/pico-de-gallo.jpg":
/*!**************************************!*\
  !*** ./src/assets/pico-de-gallo.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pico-de-gallof7711ca17cc981c829e3.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "./src/modules/header.js");
/* harmony import */ var _modules_initialPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initialPage */ "./src/modules/initialPage.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/about */ "./src/modules/about.js");
/* harmony import */ var _modules_navBarOnScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/navBarOnScroll */ "./src/modules/navBarOnScroll.js");
/* harmony import */ var _modules_navBarFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/navBarFunctions */ "./src/modules/navBarFunctions.js");








(0,_modules_initialPage__WEBPACK_IMPORTED_MODULE_2__["default"])();

const content = document.getElementById("content");

content.addEventListener("click", tabSwitching);
content.addEventListener("click", _modules_navBarFunctions__WEBPACK_IMPORTED_MODULE_6__.navBarToggle);
window.addEventListener("scroll", _modules_navBarOnScroll__WEBPACK_IMPORTED_MODULE_5__["default"]);

function tabSwitching(e) {
  if (e.target.matches(".nav-item") || e.target.matches(".logo-header")) {
    content.textContent = "";
  }

  if (e.target.matches(".home-link") || e.target.matches(".logo-header")) {
    (0,_modules_initialPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
    return;
  }

  if (e.target.matches(".menu-link")) {
    content.append((0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.navbar)(), (0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.header)("Specialties"), (0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
    (0,_modules_navBarFunctions__WEBPACK_IMPORTED_MODULE_6__.navLinkClassToggle)("menu");
    return;
  }

  if (e.target.matches(".about-link")) {
    content.append((0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.navbar)(), (0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.header)("About"), (0,_modules_about__WEBPACK_IMPORTED_MODULE_4__["default"])());
    (0,_modules_navBarFunctions__WEBPACK_IMPORTED_MODULE_6__.navLinkClassToggle)("about");
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFFBQVEsVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxL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UTtBQUNsQywyQkFBMkIsaURBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rm9DO0FBQ3BDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDc0I7QUFDRjtBQUNkO0FBQ0U7QUFDa0I7QUFDdUI7QUFDN0U7QUFDQSxnRUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtFQUFZO0FBQzlDLGtDQUFrQywrREFBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1REFBTSxJQUFJLHVEQUFNLGlCQUFpQix5REFBSTtBQUN4RCxJQUFJLDRFQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1REFBTSxJQUFJLHVEQUFNLFdBQVcsMERBQUs7QUFDbkQsSUFBSSw0RUFBa0I7QUFDdEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vc3JjL21vZHVsZXMvaW5pdGlhbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vc3JjL21vZHVsZXMvbmF2QmFyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9uYXZCYXJPblNjcm9sbC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9oZWFkZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2JhY2tncm91bmRJbWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1jb2xvci1wcmltYXJ5OiAjZmZmO1xcclxcbiAgLS1jb2xvci1hY2NlbnQ6ICNjOGE5N2U7XFxyXFxuICAtLWNvbG9yLWdyYXk6ICM2NjY2NjY7XFxyXFxuICAtLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xcclxcbiAgLS1oZWFkZXItb3ZlcmxheTogbGluZWFyLWdyYWRpZW50KHJnYigwIDAgMCAvIDAuNSksIHJnYigwIDAgMCAvIDAuNSkpO1xcclxcbiAgLS1iYWNrZ3JvdW5kLW92ZXJsYXk6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAgLyAwLjcpLCByZ2IoMCAwIDAgLyAwLjcpKTtcXHJcXG4gIC0tYm9yZGVyLXNldHRpbmdzOiAxcHggc29saWQgcmdiKDI1NSAyNTUgMjU1IC8gMC4xKTtcXHJcXG4gIC0tZmYtcHJpbWFyeTogXFxcIlBvcHBpbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tZmYtYWNjZW50OiBcXFwiR3JlYXQgVmliZXNcXFwiLCBcXFwiQ29taWMgU2FucyBNU1xcXCIsIFxcXCJDb21pYyBTYW5zXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIC0tZmYtYm9sZDogOTAwO1xcclxcbiAgLS1mZi1zZW1pLWJvbGQ6IDYwMDtcXHJcXG4gIC0tc3RhZ2dlci1kZWxheTogNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gIDEuIFVzZSBhIG1vcmUtaW50dWl0aXZlIGJveC1zaXppbmcgbW9kZWwuXFxyXFxuKi9cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gJiBwYWRkaW5nXFxyXFxuICAqL1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgMy4gQWxsb3cgcGVyY2VudGFnZS1iYXNlZCBoZWlnaHRzIGluIHRoZSBhcHBsaWNhdGlvblxcclxcbiAgKi9cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcclxcbiAgICA0LiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcclxcbiAgICA1LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxyXFxuICAqL1xcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICA2LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXFxyXFxuICAqL1xcclxcbmltZyxcXHJcXG5waWN0dXJlLFxcclxcbnZpZGVvLFxcclxcbmNhbnZhcyxcXHJcXG5zdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIDcuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXFxyXFxuICAqL1xcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXHJcXG4gICovXFxyXFxucCxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICA5LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXHJcXG4gICovXFxyXFxuI3Jvb3QsXFxyXFxuI19fbmV4dCB7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxufVxcclxcblxcclxcbi8qIEdlbmVyYWwgc3R5bGVzICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zZWN0aW9uLFxcclxcbi5hYm91dC1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDdlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmxpLFxcclxcbmJ1dHRvbixcXHJcXG4ubG9nby1oZWFkZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgc3R5bGVzICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taGVhZGVyLW92ZXJsYXkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLXNldHRpbmdzKTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDFlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuc2Nyb2xsZWQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcGFkZGluZy1ibG9jazogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCA1cHggcmdiKDAgMCAwIC8gMC4yKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuc2xlZXAge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuZmxvYXRpbmcge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtd3JhcHBlcixcXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiBtaW4oMTE0MHB4LCA5MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28taGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZmLWJvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtbGlua3Mge1xcclxcbiAgZ2FwOiAyLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtLFxcclxcbi5uYXYtaXRlbTppcyguYWN0aXZlLCAuYWN0aXZlOmhvdmVyLCA6aG92ZXIpIHtcXHJcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbTppcyguYWN0aXZlLCA6aG92ZXIpIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0uYWN0aXZlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LmZsb2F0aW5nIC5uYXYtaXRlbS5hY3RpdmU6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMC41KTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciAubGluZSB7XFxyXFxuICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIHRyYW5zaXRpb246IGZpbGwgMjAwbXMgZWFzZS1pbi1vdXQsIHkgMjAwbXMgZWFzZS1pbiAyMDBtcyxcXHJcXG4gICAgdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4sIG9wYWNpdHkgMG1zIDIwMG1zO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIgLmxpbmUub3BlbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBmaWxsIDIwMG1zIGVhc2UtaW4tb3V0LCB5IDIwMG1zIGVhc2UtaW4sXFxyXFxuICAgIHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluIDIwMG1zLCBvcGFjaXR5IDBtcyAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LmZsb2F0aW5nIC5saW5lIHtcXHJcXG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyOmhvdmVyIC5saW5lIHtcXHJcXG4gIGZpbGw6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciA6aXMoLmxpbmUtdG9wLm9wZW4sIC5saW5lLWJvdHRvbS5vcGVuKSB7XFxyXFxuICB5OiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIgLmxpbmUtdG9wLm9wZW4ge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIgLmxpbmUtYm90dG9tLm9wZW4ge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIC5saW5lLW1pZGRsZS5vcGVuIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29sbGFwc2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXgtaGVpZ2h0OiAwO1xcclxcbiAgZmxleC1iYXNpczogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29sbGFwc2UgPiB1bCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGdhcDogMmVtO1xcclxcbiAgcGFkZGluZy1ibG9jazogMWVtO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWNvbGxhcHNlLmRpc3BsYXkge1xcclxcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWNvbGxhcHNlLmRpc3BsYXkgLm5hdi1jb2xsYXBzZS1saW5rcyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXMgZWFzZS1pbi1vdXQgMTUwbXM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk4MXB4KSB7XFxyXFxuICAubmF2LWNvbGxhcHNlLmRpc3BsYXksXFxyXFxuICAubmF2LWNvbGxhcHNlID4gdWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xcclxcbiAgLm1haW4tbmF2IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1uYXYtbGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi10b2dnbGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXdyYXBwZXIge1xcclxcbiAgZ3JpZC1yb3c6IDM7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAzLjEyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZSBzdHlsZXMgKi9cXHJcXG4uaG9tZS1zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iYWNrZ3JvdW5kLW92ZXJsYXkpLFxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMCU7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC4zZnI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLXdyYXBwZXIge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWxvZ28ge1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdC1kaXNjIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgMS43NXJlbSArIDR2dywgNHJlbSk7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQtaXRlbXMge1xcclxcbiAgYm9yZGVyLXRvcDogdmFyKC0tYm9yZGVyLXNldHRpbmdzKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkLWl0ZW1zLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHJvdy1nYXA6IDAuNWVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZy1ibG9jazogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkLWl0ZW0gaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiA5MHB4O1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxyXFxuICAuaG9tZS1zZWN0aW9uIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjlweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxyXFxuICAuaG9tZS1zZWN0aW9uIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgNTcwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZlYXR1cmVkLWl0ZW1zLXdyYXBwZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNZW51IHN0eWxlICovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oMTIwcHgsIDEwMCUpLCAxZnIpKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgPiBsaSB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mZi1zZW1pLWJvbGQpO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyA+IGxpOmhvdmVyLFxcclxcbi5tZW51LWxpbmstYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmstYWN0aXZlOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgYm90dG9tOiAtMTBweDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oNDAwcHgsIDEwMCUpLCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSA+IGltZyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhc3BlY3QtcmF0aW86IDIgLyAxLjU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbTpudGgtY2hpbGQoMykgaW1nLFxcclxcbi5tZW51LWl0ZW06bnRoLWNoaWxkKDQpIGltZyB7XFxyXFxuICBvcmRlcjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tY29udGFpbmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcm93LWdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG46aXMoOmhvdmVyLCA6YWN0aXZlKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuLFxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5vcmRlci1idG4sIC5tZW51LW5hdi1pdGVtKTppcyg6aG92ZXIsIDphY3RpdmUpIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWhlYWRlciA+ICoge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZmYtc2VtaS1ib2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0taGVhZGVyID4gaDIge1xcclxcbiAgbWF4LXdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcHJpY2Uge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSwgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gIC5tZW51LWxpbmtzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1pdGVtIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1pdGVtID4gaW1nIHtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAzIC8gMS41O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtaXRlbTpudGgtY2hpbGQoMykgaW1nLFxcclxcbiAgLm1lbnUtaXRlbTpudGgtY2hpbGQoNCkgaW1nIHtcXHJcXG4gICAgb3JkZXI6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1saW5rLWFjdGl2ZTo6YWZ0ZXIge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBBYm91dCBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uYWJvdXQtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjJmciAxZnI7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZ3Mtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWdzLXdyYXBwZXIgPiBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNWVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDNlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiA2LjI1cmVtO1xcclxcbiAgZ3JpZC1yb3c6IDE7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXJlc3RhdXJhbnQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzLjEyNXJlbTtcXHJcXG4gIGdyaWQtcm93OiAxIC8gMztcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQsXFxyXFxuLndvcmstZGF5cyB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQge1xcclxcbiAgbWFyZ2luLWJsb2NrOiAxLjVlbSAxZW07XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1kYXlzIHtcXHJcXG4gIG1hcmdpbi1ibG9jazogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1ob3VycyB7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZmYtYm9sZCk7XFxyXFxufVxcclxcblxcclxcbi5waG9uZS1udW1iZXIge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xcclxcbiAgLmFib3V0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWNvbnRlbnQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogQW5pbWF0aW9uICovXFxyXFxuXFxyXFxuLmluZm8td3JhcHBlcixcXHJcXG4uaGVyby13cmFwcGVyIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb246IDUwMG1zIGVhc2UtaW4tb3V0IHNsaWRlSW5VcCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDM1cHgpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZC1pdGVtLFxcclxcbi5tZW51LW5hdi1pdGVtLFxcclxcbi5hYm91dC1pbWdzLXdyYXBwZXIsXFxyXFxuLmFib3V0LXRleHQtd3JhcHBlcixcXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb246IDUwMG1zIGVhc2UtaW4tb3V0IHNsaWRlSW5VcCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLyogOmlzKC5mZWF0dXJlZC1pdGVtLCAubWVudS1uYXYtaXRlbSk6aXMoOm50aC1jaGlsZCgxKSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwbXM7XFxyXFxufSAqL1xcclxcblxcclxcbjppcyguZmVhdHVyZWQtaXRlbSwgLm1lbnUtbmF2LWl0ZW0sIC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoMikpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tc3RhZ2dlci1kZWxheSk7XFxyXFxufVxcclxcblxcclxcbjppcyguZmVhdHVyZWQtaXRlbSwgLm1lbnUtbmF2LWl0ZW0sIC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoMykpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1zdGFnZ2VyLWRlbGF5KSArIDI1bXMpO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoLmZlYXR1cmVkLWl0ZW0sIC5tZW51LW5hdi1pdGVtLCAubWVudS1pdGVtKTppcyg6bnRoLWNoaWxkKDQpKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tc3RhZ2dlci1kZWxheSkgKyA1MG1zKTtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5tZW51LW5hdi1pdGVtLCAubWVudS1pdGVtKTppcyg6bnRoLWNoaWxkKDUpKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tc3RhZ2dlci1kZWxheSkgKyA3NW1zKTtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoNikpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1zdGFnZ2VyLWRlbGF5KSArIDk1bXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1ncy13cmFwcGVyIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQtd3JhcHBlciB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDI1bXM7XFxyXFxufVxcclxcblxcclxcbi8qIFV0aWxpdHkgc3R5bGVzICovXFxyXFxuXFxyXFxuLmNsci1hY2NlbnQge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5mZi1hY2NlbnQge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWFjY2VudCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHFFQUFxRTtFQUNyRSx5RUFBeUU7RUFDekUsbURBQW1EO0VBQ25ELDBDQUEwQztFQUMxQyxrRUFBa0U7RUFDbEUsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7O0NBRUM7QUFDRDs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7O0dBRUc7QUFDSDtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTs7R0FFRztBQUNIOztFQUVFLGFBQWE7QUFDZjtBQUNBOzs7O0dBSUc7QUFDSDtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFDQTs7R0FFRztBQUNIOzs7OztFQUtFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7O0dBRUc7QUFDSDs7OztFQUlFLGFBQWE7QUFDZjtBQUNBOztHQUVHO0FBQ0g7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7QUFDQTs7R0FFRztBQUNIOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsZUFBZTtBQUNqQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFD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d0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7Ozs7O0VBS0UsVUFBVTtFQUNWLCtDQUErQztBQUNqRDs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jb2xvci1wcmltYXJ5OiAjZmZmO1xcclxcbiAgLS1jb2xvci1hY2NlbnQ6ICNjOGE5N2U7XFxyXFxuICAtLWNvbG9yLWdyYXk6ICM2NjY2NjY7XFxyXFxuICAtLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xcclxcbiAgLS1oZWFkZXItb3ZlcmxheTogbGluZWFyLWdyYWRpZW50KHJnYigwIDAgMCAvIDAuNSksIHJnYigwIDAgMCAvIDAuNSkpO1xcclxcbiAgLS1iYWNrZ3JvdW5kLW92ZXJsYXk6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAgLyAwLjcpLCByZ2IoMCAwIDAgLyAwLjcpKTtcXHJcXG4gIC0tYm9yZGVyLXNldHRpbmdzOiAxcHggc29saWQgcmdiKDI1NSAyNTUgMjU1IC8gMC4xKTtcXHJcXG4gIC0tZmYtcHJpbWFyeTogXFxcIlBvcHBpbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tZmYtYWNjZW50OiBcXFwiR3JlYXQgVmliZXNcXFwiLCBcXFwiQ29taWMgU2FucyBNU1xcXCIsIFxcXCJDb21pYyBTYW5zXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIC0tZmYtYm9sZDogOTAwO1xcclxcbiAgLS1mZi1zZW1pLWJvbGQ6IDYwMDtcXHJcXG4gIC0tc3RhZ2dlci1kZWxheTogNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gIDEuIFVzZSBhIG1vcmUtaW50dWl0aXZlIGJveC1zaXppbmcgbW9kZWwuXFxyXFxuKi9cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gJiBwYWRkaW5nXFxyXFxuICAqL1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgMy4gQWxsb3cgcGVyY2VudGFnZS1iYXNlZCBoZWlnaHRzIGluIHRoZSBhcHBsaWNhdGlvblxcclxcbiAgKi9cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcclxcbiAgICA0LiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcclxcbiAgICA1LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxyXFxuICAqL1xcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICA2LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXFxyXFxuICAqL1xcclxcbmltZyxcXHJcXG5waWN0dXJlLFxcclxcbnZpZGVvLFxcclxcbmNhbnZhcyxcXHJcXG5zdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIDcuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXFxyXFxuICAqL1xcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXHJcXG4gICovXFxyXFxucCxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICA5LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXHJcXG4gICovXFxyXFxuI3Jvb3QsXFxyXFxuI19fbmV4dCB7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxufVxcclxcblxcclxcbi8qIEdlbmVyYWwgc3R5bGVzICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zZWN0aW9uLFxcclxcbi5hYm91dC1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDdlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmxpLFxcclxcbmJ1dHRvbixcXHJcXG4ubG9nby1oZWFkZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgc3R5bGVzICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taGVhZGVyLW92ZXJsYXkpLCB1cmwoXFxcIi4uL2Fzc2V0cy9oZWFkZXIuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXItc2V0dGluZ3MpO1xcclxcbiAgcGFkZGluZy1ibG9jazogMWVtO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdi5zY3JvbGxlZCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAwLjVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2IoMCAwIDAgLyAwLjIpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdi5zbGVlcCB7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdi5mbG9hdGluZyB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdi13cmFwcGVyLFxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IG1pbigxMTQwcHgsIDkwJSk7XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdi13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1oZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZmYtYm9sZCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdi1saW5rcyB7XFxyXFxuICBnYXA6IDIuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0sXFxyXFxuLm5hdi1pdGVtOmlzKC5hY3RpdmUsIC5hY3RpdmU6aG92ZXIsIDpob3Zlcikge1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtOmlzKC5hY3RpdmUsIDpob3Zlcikge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbS5hY3RpdmU6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuZmxvYXRpbmcgLm5hdi1pdGVtLmFjdGl2ZTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAwLjUpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlciB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIC5saW5lIHtcXHJcXG4gIGZpbGw6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgdHJhbnNpdGlvbjogZmlsbCAyMDBtcyBlYXNlLWluLW91dCwgeSAyMDBtcyBlYXNlLWluIDIwMG1zLFxcclxcbiAgICB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbiwgb3BhY2l0eSAwbXMgMjAwbXM7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciAubGluZS5vcGVuIHtcXHJcXG4gIHRyYW5zaXRpb246IGZpbGwgMjAwbXMgZWFzZS1pbi1vdXQsIHkgMjAwbXMgZWFzZS1pbixcXHJcXG4gICAgdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4gMjAwbXMsIG9wYWNpdHkgMG1zIDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuZmxvYXRpbmcgLmxpbmUge1xcclxcbiAgZmlsbDogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXI6aG92ZXIgLmxpbmUge1xcclxcbiAgZmlsbDogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIDppcygubGluZS10b3Aub3BlbiwgLmxpbmUtYm90dG9tLm9wZW4pIHtcXHJcXG4gIHk6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciAubGluZS10b3Aub3BlbiB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciAubGluZS1ib3R0b20ub3BlbiB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIgLmxpbmUtbWlkZGxlLm9wZW4ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jb2xsYXBzZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC1oZWlnaHQ6IDA7XFxyXFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jb2xsYXBzZSA+IHVsIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgZ2FwOiAyZW07XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAxZW07XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29sbGFwc2UuZGlzcGxheSB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXHJcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29sbGFwc2UuZGlzcGxheSAubmF2LWNvbGxhcHNlLWxpbmtzIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBlYXNlLWluLW91dCAxNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgxcHgpIHtcXHJcXG4gIC5uYXYtY29sbGFwc2UuZGlzcGxheSxcXHJcXG4gIC5uYXYtY29sbGFwc2UgPiB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxyXFxuICAubWFpbi1uYXYge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLW5hdi1saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LXRvZ2dsZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8td3JhcHBlciB7XFxyXFxuICBncmlkLXJvdzogMztcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDMuMTI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb21lIHN0eWxlcyAqL1xcclxcbi5ob21lLXNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJhY2tncm91bmQtb3ZlcmxheSksXFxyXFxuICAgIHVybChcXFwiLi4vYXNzZXRzL2JhY2tncm91bmRJbWcuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDEwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjNmcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8td3JhcHBlciB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbG9nbyB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXN0LWRpc2Mge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgzcmVtLCAxLjc1cmVtICsgNHZ3LCA0cmVtKTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZC1pdGVtcyB7XFxyXFxuICBib3JkZXItdG9wOiB2YXIoLS1ib3JkZXItc2V0dGluZ3MpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQtaXRlbXMtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgcm93LWdhcDogMC41ZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQtaXRlbSBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDkwcHg7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcXHJcXG4gIC5ob21lLXNlY3Rpb24ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2OXB4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcXHJcXG4gIC5ob21lLXNlY3Rpb24ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggKyA1NzBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmVhdHVyZWQtaXRlbXMtd3JhcHBlciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1lbnUgc3R5bGUgKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KG1pbigxMjBweCwgMTAwJSksIDFmcikpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyA+IGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZmLXNlbWktYm9sZCk7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzID4gbGk6aG92ZXIsXFxyXFxuLm1lbnUtbGluay1hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGluay1hY3RpdmU6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBib3R0b206IC0xMHB4O1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KG1pbig0MDBweCwgMTAwJSksIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtID4gaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMiAvIDEuNTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtOm50aC1jaGlsZCgzKSBpbWcsXFxyXFxuLm1lbnUtaXRlbTpudGgtY2hpbGQoNCkgaW1nIHtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICByb3ctZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0bjppcyg6aG92ZXIsIDphY3RpdmUpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG4sXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoLm9yZGVyLWJ0biwgLm1lbnUtbmF2LWl0ZW0pOmlzKDpob3ZlciwgOmFjdGl2ZSkge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0taGVhZGVyID4gKiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mZi1zZW1pLWJvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1oZWFkZXIgPiBoMiB7XFxyXFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wcmljZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpLCAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgLm1lbnUtbGlua3Mge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW0ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW0gPiBpbWcge1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDMgLyAxLjU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1pdGVtOm50aC1jaGlsZCgzKSBpbWcsXFxyXFxuICAubWVudS1pdGVtOm50aC1jaGlsZCg0KSBpbWcge1xcclxcbiAgICBvcmRlcjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWxpbmstYWN0aXZlOjphZnRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIEFib3V0IHN0eWxlcyAqL1xcclxcblxcclxcbi5hYm91dC1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMmZyIDFmcjtcXHJcXG4gIGdhcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1ncy13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZ3Mtd3JhcHBlciA+IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41ZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogM2VtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDYuMjVyZW07XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcmVzdGF1cmFudC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDMuMTI1cmVtO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dCxcXHJcXG4ud29yay1kYXlzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dCB7XFxyXFxuICBtYXJnaW4tYmxvY2s6IDEuNWVtIDFlbTtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWRheXMge1xcclxcbiAgbWFyZ2luLWJsb2NrOiAxZW07XFxyXFxufVxcclxcblxcclxcbi53b3JrLWhvdXJzIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mZi1ib2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBob25lLW51bWJlciB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XFxyXFxuICAuYWJvdXQge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtY29udGVudCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBBbmltYXRpb24gKi9cXHJcXG5cXHJcXG4uaW5mby13cmFwcGVyLFxcclxcbi5oZXJvLXdyYXBwZXIge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGFuaW1hdGlvbjogNTAwbXMgZWFzZS1pbi1vdXQgc2xpZGVJblVwIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlSW5VcCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzVweCk7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkLWl0ZW0sXFxyXFxuLm1lbnUtbmF2LWl0ZW0sXFxyXFxuLmFib3V0LWltZ3Mtd3JhcHBlcixcXHJcXG4uYWJvdXQtdGV4dC13cmFwcGVyLFxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGFuaW1hdGlvbjogNTAwbXMgZWFzZS1pbi1vdXQgc2xpZGVJblVwIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA6aXMoLmZlYXR1cmVkLWl0ZW0sIC5tZW51LW5hdi1pdGVtKTppcyg6bnRoLWNoaWxkKDEpKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDBtcztcXHJcXG59ICovXFxyXFxuXFxyXFxuOmlzKC5mZWF0dXJlZC1pdGVtLCAubWVudS1uYXYtaXRlbSwgLm1lbnUtaXRlbSk6aXMoOm50aC1jaGlsZCgyKSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1zdGFnZ2VyLWRlbGF5KTtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5mZWF0dXJlZC1pdGVtLCAubWVudS1uYXYtaXRlbSwgLm1lbnUtaXRlbSk6aXMoOm50aC1jaGlsZCgzKSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXN0YWdnZXItZGVsYXkpICsgMjVtcyk7XFxyXFxufVxcclxcblxcclxcbjppcyguZmVhdHVyZWQtaXRlbSwgLm1lbnUtbmF2LWl0ZW0sIC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoNCkpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1zdGFnZ2VyLWRlbGF5KSArIDUwbXMpO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoLm1lbnUtbmF2LWl0ZW0sIC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoNSkpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1zdGFnZ2VyLWRlbGF5KSArIDc1bXMpO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoLm1lbnUtaXRlbSk6aXMoOm50aC1jaGlsZCg2KSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXN0YWdnZXItZGVsYXkpICsgOTVtcyk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWdzLXdyYXBwZXIge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dC13cmFwcGVyIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMjVtcztcXHJcXG59XFxyXFxuXFxyXFxuLyogVXRpbGl0eSBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uY2xyLWFjY2VudCB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZmLWFjY2VudCB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtYWNjZW50KTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhYm91dEltZyBmcm9tIFwiLi4vYXNzZXRzL2Fib3V0LndlYnBcIjtcclxuaW1wb3J0IGFib3V0SW1nMiBmcm9tIFwiLi4vYXNzZXRzL2Fib3V0LTEud2VicFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRTZWN0aW9uQ29tcG9uZW50KCkge1xyXG4gIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtc2VjdGlvblwiKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0Q29udGVudCgpKTtcclxuICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIGFib3V0U2VjdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWJvdXRDb250ZW50KCkge1xyXG4gIGNvbnN0IGFib3V0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYWJvdXRJbWdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBhYm91dEltZ0NvbnRhaW5lciA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IGFib3V0SW1nMkNvbnRhaW5lciA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICBhYm91dFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWNvbnRlbnRcIik7XHJcbiAgYWJvdXRJbWdzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1pbWdzLXdyYXBwZXJcIik7XHJcbiAgYWJvdXRJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xyXG4gIGFib3V0SW1nMkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtMlwiKTtcclxuXHJcbiAgYWJvdXRJbWdDb250YWluZXIuZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgYWJvdXRJbWcyQ29udGFpbmVyLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG5cclxuICBhYm91dEltZ0NvbnRhaW5lci5zcmMgPSBhYm91dEltZztcclxuICBhYm91dEltZzJDb250YWluZXIuc3JjID0gYWJvdXRJbWcyO1xyXG5cclxuICBhYm91dEltZ3NDb250YWluZXIuYXBwZW5kKGFib3V0SW1nQ29udGFpbmVyLCBhYm91dEltZzJDb250YWluZXIpO1xyXG4gIGFib3V0V3JhcHBlci5hcHBlbmQoYWJvdXRJbWdzQ29udGFpbmVyLCBhYm91dEJvZHlUZXh0KCkpO1xyXG5cclxuICByZXR1cm4gYWJvdXRXcmFwcGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhYm91dEJvZHlUZXh0KCkge1xyXG4gIGNvbnN0IGFib3V0VGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGFib3V0VGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYWJvdXRUZXh0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYWJvdXRUZXh0Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IHJlc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBjb25zdCBib2R5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGRheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gIGFib3V0VGV4dFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHQtd3JhcHBlclwiKTtcclxuICBhYm91dFRleHRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHQtaGVhZGVyXCIpO1xyXG4gIGFib3V0VGV4dEJvZHkuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHQtYm9keVwiKTtcclxuICBhYm91dFRleHRGb290ZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHQtZm9vdGVyXCIpO1xyXG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dC10aXRsZVwiLCBcImNsci1hY2NlbnRcIiwgXCJmZi1hY2NlbnRcIik7XHJcbiAgcmVzdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1yZXN0YXVyYW50LXRpdGxlXCIpO1xyXG4gIHBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJwaG9uZS1udW1iZXJcIiwgXCJjbHItYWNjZW50XCIpO1xyXG4gIGJvZHlDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJhYm91dC10ZXh0XCIpO1xyXG4gIGRheXMuY2xhc3NMaXN0LmFkZChcIndvcmstZGF5c1wiKTtcclxuICBob3Vycy5jbGFzc0xpc3QuYWRkKFwid29yay1ob3Vyc1wiKTtcclxuXHJcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XHJcbiAgcmVzdFRpdGxlLnRleHRDb250ZW50ID0gXCJMdW5hIFJlc3RhdXJhbnRcIjtcclxuICBib2R5Q29udGVudC50ZXh0Q29udGVudCA9XHJcbiAgICBcIkEgc21hbGwgcml2ZXIgbmFtZWQgRHVkZW4gZmxvd3MgYnkgdGhlaXIgcGxhY2UgYW5kIHN1cHBsaWVzIGl0IHdpdGggdGhlIG5lY2Vzc2FyeSByZWdlbGlhbGlhLlwiICtcclxuICAgIFwiSXQgaXMgYSBwYXJhZGlzZW1hdGljIGNvdW50cnksIGluIHdoaWNoIHJvYXN0ZWQgcGFydHMgb2Ygc2VudGVuY2VzIGZseSBpbnRvIHlvdXIgbW91dGguXCI7XHJcbiAgZGF5cy50ZXh0Q29udGVudCA9IFwiTW9uIC0gRnJpXCI7XHJcbiAgaG91cnMudGV4dENvbnRlbnQgPSBcIiA4IEFNIC0gMTEgUE1cIjtcclxuICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IFwiKzEtOTc4LTEyMy00NTY3XCI7XHJcblxyXG4gIGRheXMuYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG4gIGFib3V0VGV4dEJvZHkuYXBwZW5kKGJvZHlDb250ZW50LCBkYXlzLCBwaG9uZU51bWJlcik7XHJcbiAgYWJvdXRUZXh0V3JhcHBlci5hcHBlbmQoYWJvdXRUZXh0SGVhZGVyLCBhYm91dFRleHRCb2R5LCBhYm91dFRleHRGb290ZXIpO1xyXG4gIGFib3V0VGV4dEhlYWRlci5hcHBlbmQoYWJvdXQsIHJlc3RUaXRsZSk7XHJcblxyXG4gIHJldHVybiBhYm91dFRleHRXcmFwcGVyO1xyXG59XHJcbiIsImZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICBjb25zdCBsaW5rcyA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQWJvdXRcIl07XHJcblxyXG4gIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIGNvbnN0IG5hdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBjb25zdCBuYXZMaW5rc0NvcHkgPSBuYXZMaW5rcy5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgY29uc3QgbmF2VG9nZ2xlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY29uc3QgbmF2Q29sbGFwc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBuYXZFbGVtZW50LmlkID0gXCJtYWluTmF2XCI7XHJcbiAgbmF2VG9nZ2xlci5pZCA9IFwibmF2VG9nZ2xlclwiO1xyXG4gIG5hdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tbmF2XCIpO1xyXG4gIG5hdldyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tbmF2LXdyYXBwZXJcIik7XHJcbiAgbmF2TGlua3MuY2xhc3NMaXN0LmFkZChcIm1haW4tbmF2LWxpbmtzXCIpO1xyXG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ28taGVhZGVyXCIpO1xyXG4gIG5hdlRvZ2dsZXIuY2xhc3NMaXN0LmFkZChcIm5hdi10b2dnbGVyXCIpO1xyXG4gIG5hdkNvbGxhcHNlLmNsYXNzTGlzdC5hZGQoXCJuYXYtY29sbGFwc2VcIik7XHJcbiAgbmF2TGlua3NDb3B5LmNsYXNzTGlzdC5hZGQoXCJuYXYtY29sbGFwc2UtbGlua3NcIik7XHJcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiTHVuYVwiO1xyXG5cclxuICBuYXZFbGVtZW50LmFwcGVuZENoaWxkKG5hdldyYXBwZXIpO1xyXG4gIG5hdldyYXBwZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgbmF2V3JhcHBlci5hcHBlbmRDaGlsZChuYXZMaW5rcyk7XHJcbiAgbmF2V3JhcHBlci5hcHBlbmRDaGlsZChuYXZUb2dnbGVyKTtcclxuICBuYXZXcmFwcGVyLmFwcGVuZENoaWxkKG5hdkNvbGxhcHNlKTtcclxuICBuYXZUb2dnbGVyLmFwcGVuZENoaWxkKHN2Z0hhbSgpKTtcclxuICBuYXZDb2xsYXBzZS5hcHBlbmRDaGlsZChuYXZMaW5rc0NvcHkpO1xyXG5cclxuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpLnRleHRDb250ZW50ID0gbGluaztcclxuICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiLCBgJHtsaW5rLnRvTG93ZXJDYXNlKCl9LWxpbmtgKTtcclxuICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIG5hdkxpbmtzQ29weS5hcHBlbmRDaGlsZChsaS5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmF2RWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGVhZGVyKHBhZ2UpIHtcclxuICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBjb25zdCBoZXJvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblxyXG4gIGhlcm9UZXh0LnRleHRDb250ZW50ID0gcGFnZTtcclxuXHJcbiAgaGVyb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhlcm8td3JhcHBlclwiKTtcclxuICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKFwiaGVyby10ZXh0XCIpO1xyXG5cclxuICBoZXJvV3JhcHBlci5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XHJcbiAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChoZXJvV3JhcHBlcik7XHJcblxyXG4gIHJldHVybiBoZWFkZXJFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgeyBuYXZiYXIsIGhlYWRlciB9O1xyXG5cclxuZnVuY3Rpb24gc3ZnSGFtKCkge1xyXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG4gIGNvbnN0IHJlY3RPbmUgPSByZWN0Q29tcG9uZW50KFwibGluZS10b3BcIiwgXCIyNVwiKTtcclxuICBjb25zdCByZWN0VHdvID0gcmVjdENvbXBvbmVudChcImxpbmUtbWlkZGxlXCIsIFwiNDVcIik7XHJcbiAgY29uc3QgcmVjdFRocmVlID0gcmVjdENvbXBvbmVudChcImxpbmUtYm90dG9tXCIsIFwiNjVcIik7XHJcblxyXG4gIHN2Zy5jbGFzc0xpc3QuYWRkKFwiaGFtYnVyZ2VyXCIpO1xyXG5cclxuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAxMDAgMTAwXCIpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjM1XCIpO1xyXG5cclxuICBzdmcuYXBwZW5kKHJlY3RPbmUsIHJlY3RUd28sIHJlY3RUaHJlZSk7XHJcblxyXG4gIHJldHVybiBzdmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlY3RDb21wb25lbnQoY2xhc3NUd28sIHksIHggPSAxMCwgY2xhc3NPbmUgPSBcImxpbmVcIikge1xyXG4gIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInJlY3RcIik7XHJcblxyXG4gIHJlY3QuY2xhc3NMaXN0LmFkZChjbGFzc09uZSwgY2xhc3NUd28pO1xyXG5cclxuICByZWN0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiODBcIik7XHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxMFwiKTtcclxuICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgeCk7XHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xyXG4gIHJlY3Quc2V0QXR0cmlidXRlKFwicnhcIiwgXCI1XCIpO1xyXG4gIHJlY3Quc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xyXG5cclxuICByZXR1cm4gcmVjdDtcclxufVxyXG4iLCJpbXBvcnQgbWVudUl0ZW1zIGZyb20gXCIuL21lbnVJdGVtc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcclxuICBjb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG5cclxuICBob21lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1zZWN0aW9uXCIpO1xyXG5cclxuICBob21lU2VjdGlvbi5hcHBlbmQoaW5mb0NvbXBvbmVudCgpLCBmZWF0dXJlZEl0ZW1zKCkpO1xyXG5cclxuICByZXR1cm4gaG9tZVNlY3Rpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZm9Db21wb25lbnQoKSB7XHJcbiAgY29uc3QgaW5mb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCByZXN0YXVyYW50RGlzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuXHJcbiAgaW5mb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImluZm8td3JhcHBlclwiKTtcclxuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJtYWluLWxvZ29cIiwgXCJjbHItYWNjZW50XCIsIFwiZmYtYWNjZW50XCIpO1xyXG4gIHJlc3RhdXJhbnREaXNjLmNsYXNzTGlzdC5hZGQoXCJyZXN0LWRpc2NcIik7XHJcblxyXG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIkx1bmFcIjtcclxuICByZXN0YXVyYW50RGlzYy50ZXh0Q29udGVudCA9IFwiRGVsaWNpb3VzIFNwZWNpYWx0aWVzXCI7XHJcblxyXG4gIGluZm9XcmFwcGVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIGluZm9XcmFwcGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREaXNjKTtcclxuXHJcbiAgcmV0dXJuIGluZm9XcmFwcGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmZWF0dXJlZEl0ZW1zKCkge1xyXG4gIGNvbnN0IGZlYXR1cmVkSXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBjb25zdCBmZWF0dXJlZEl0ZW1zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGZlYXR1cmVkSXRlbXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZlYXR1cmVkLWl0ZW1zXCIpO1xyXG4gIGZlYXR1cmVkSXRlbXNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlZC1pdGVtcy13cmFwcGVyXCIpO1xyXG5cclxuICBPYmplY3QudmFsdWVzKG1lbnVJdGVtcylcclxuICAgIC5zbGljZSgwLCA0KVxyXG4gICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgZmVhdHVyZWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY29uc3QgaXRlbUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgICAgZmVhdHVyZWRJdGVtLmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlZC1pdGVtXCIpO1xyXG5cclxuICAgICAgaXRlbUltZy5zcmMgPSBpdGVtLmltZztcclxuICAgICAgaXRlbUltZy5hbHQgPSBpdGVtLm5hbWU7XHJcbiAgICAgIGl0ZW1JbWcuZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG5cclxuICAgICAgZmVhdHVyZWRJdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xyXG4gICAgICBmZWF0dXJlZEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xyXG4gICAgICBmZWF0dXJlZEl0ZW1zV3JhcHBlci5hcHBlbmRDaGlsZChmZWF0dXJlZEl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gIGZlYXR1cmVkSXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZWRJdGVtc1dyYXBwZXIpO1xyXG5cclxuICByZXR1cm4gZmVhdHVyZWRJdGVtc0NvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbFBhZ2UoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZChuYXZiYXIoKSwgaG9tZSgpKTtcclxuICBjb25zdCBob21lTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWUtbGlua1wiKTtcclxuICBob21lTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBtZW51SXRlbXMgZnJvbSBcIi4vbWVudUl0ZW1zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51U2VjdGlvbigpIHtcclxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWN0aW9uXCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVOYXYoKSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtc0NvbXBvbmVudCgpKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnVOYXYoKSB7XHJcbiAgY29uc3QgbmF2TmFtZXMgPSBbXCJCcmVha2Zhc3RcIiwgXCJMdW5jaFwiLCBcIkRpbm5lclwiLCBcIkRyaW5rc1wiLCBcIkRlc3NlcnRzXCJdO1xyXG5cclxuICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWxpbmtzXCIpO1xyXG5cclxuICBuYXZOYW1lcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaUVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgaWYgKGl0ZW0gPT09IFwiRGlubmVyXCIpIHtcclxuICAgICAgbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LW5hdi1pdGVtXCIsIFwibWVudS1saW5rLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIGxpRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWVudS1uYXYtaXRlbVwiKTtcclxuXHJcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpRWxlbWVudCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuYXZMaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZW51SXRlbXNDb21wb25lbnQoKSB7XHJcbiAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBtZW51V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWVudS13cmFwcGVyXCIpO1xyXG5cclxuICBPYmplY3QudmFsdWVzKG1lbnVJdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpdGVtSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb25zdCBpdGVtSW5mb0NvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaXRlbUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNvbnN0IGl0ZW1JbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuICAgIGl0ZW1JbWcuY2xhc3NMaXN0LmFkZChcIml0ZW0taW1nXCIpO1xyXG4gICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLW5hbWVcIik7XHJcbiAgICBpdGVtSW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcIml0ZW0taW5ncmVkaWVudHNcIik7XHJcbiAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChcIml0ZW0tcHJpY2VcIik7XHJcbiAgICBpdGVtSW5mb0NvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZChcImluZm8tY29udGFpbmVyXCIpO1xyXG4gICAgaXRlbUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaXRlbS1oZWFkZXJcIik7XHJcbiAgICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKFwib3JkZXItYnRuXCIpO1xyXG5cclxuICAgIGl0ZW1JbWcuc3JjID0gaXRlbS5pbWc7XHJcbiAgICBpdGVtSW1nLmFsdCA9IGl0ZW0ubmFtZTtcclxuICAgIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGAkJHtpdGVtLnByaWNlfWA7XHJcbiAgICBpdGVtSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRzLmpvaW4oXCIsIFwiKTtcclxuICAgIG9yZGVyQnRuLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcclxuXHJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtSW1nLCBpdGVtSW5mb0NvbnRhaW50ZXIpO1xyXG4gICAgaXRlbUluZm9Db250YWludGVyLmFwcGVuZChpdGVtSGVhZGVyLCBpdGVtSW5ncmVkaWVudHMsIG9yZGVyQnRuKTtcclxuICAgIGl0ZW1IZWFkZXIuYXBwZW5kKGl0ZW1UaXRsZSwgaXRlbVByaWNlKTtcclxuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbWVudVdyYXBwZXI7XHJcbn1cclxuIiwiaW1wb3J0IGZpc2hUYWNvcyBmcm9tIFwiLi4vYXNzZXRzL2Zpc2gtdGFjb3MuanBnXCI7XHJcbmltcG9ydCBjaGlja2VuVG9zdGFkYXMgZnJvbSBcIi4uL2Fzc2V0cy9jaGlja2VuLXRvc3RhZGFzLmpwZ1wiO1xyXG5pbXBvcnQgYmFrZWRDaGlja2VuUXVlc2FkaWxsYXMgZnJvbSBcIi4uL2Fzc2V0cy9CYWtlZC1DaGlja2VuLVF1ZXNhZGlsbGFzLmpwZ1wiO1xyXG5pbXBvcnQgY2hpY2tlbkVuY2hpbGFkYXMgZnJvbSBcIi4uL2Fzc2V0cy9jaGlja2VuLWVuY2hpbGFkYXMuanBnXCI7XHJcbmltcG9ydCBwaWNvRGVHYWxsbyBmcm9tIFwiLi4vYXNzZXRzL3BpY28tZGUtZ2FsbG8uanBnXCI7XHJcbmltcG9ydCBibGFja0JlYW5CdXJyaXRvIGZyb20gXCIuLi9hc3NldHMvYmxhY2stYmVhbi1idXJyaXRvLmpwZ1wiO1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0ge1xyXG4gIGl0ZW0xOiB7XHJcbiAgICBuYW1lOiBcIkZpc2ggVGFjb3NcIixcclxuICAgIGltZzogZmlzaFRhY29zLFxyXG4gICAgcHJpY2U6IDEzLFxyXG4gICAgaW5ncmVkaWVudHM6IFtcIkZpc2hcIiwgXCJTcmlyYWNoYVwiLCBcIkdhcmxpYyBwb3dkZXJcIiwgXCJMaW1lIGp1aWNlXCJdLFxyXG4gIH0sXHJcbiAgaXRlbTI6IHtcclxuICAgIG5hbWU6IFwiQ2hpY2tlbiBUb3N0YWRhc1wiLFxyXG4gICAgaW1nOiBjaGlja2VuVG9zdGFkYXMsXHJcbiAgICBwcmljZTogOCxcclxuICAgIGluZ3JlZGllbnRzOiBbXHJcbiAgICAgIFwiUGludG8gYmVhbnNcIixcclxuICAgICAgXCJSZWZyaWVkIGJlYW5zXCIsXHJcbiAgICAgIFwiU291ciBjcmVhbVwiLFxyXG4gICAgICBcIldoaXRlIGNvcm4gdG9ydGlsbGFzXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgaXRlbTM6IHtcclxuICAgIG5hbWU6IFwiQ2hpY2tlbiBRdWVzYWRpbGxhc1wiLFxyXG4gICAgaW1nOiBiYWtlZENoaWNrZW5RdWVzYWRpbGxhcyxcclxuICAgIHByaWNlOiAyMCxcclxuICAgIGluZ3JlZGllbnRzOiBbXCJTb3VyIGNyZWFtXCIsIFwiUGVwcGVyIGphY2sgY2hlZXNlXCIsIFwiU2hyZWRkZWQgY2hpY2tlblwiXSxcclxuICB9LFxyXG4gIGl0ZW00OiB7XHJcbiAgICBuYW1lOiBcIkNoaWNrZW4gRW5jaGlsYWRhc1wiLFxyXG4gICAgaW1nOiBjaGlja2VuRW5jaGlsYWRhcyxcclxuICAgIHByaWNlOiAxNSxcclxuICAgIGluZ3JlZGllbnRzOiBbXCJTb3VyIGNyZWFtXCIsIFwiRWFzeSBlbmNoaWxhZGEgc2F1Y2VcIiwgXCJTaHJlZGRlZCBjaGlja2VuXCJdLFxyXG4gIH0sXHJcbiAgaXRlbTU6IHtcclxuICAgIG5hbWU6IFwiUGljbyBEZSBHYWxsb1wiLFxyXG4gICAgaW1nOiBwaWNvRGVHYWxsbyxcclxuICAgIHByaWNlOiAxMCxcclxuICAgIGluZ3JlZGllbnRzOiBbXCJUb21hdG9lc1wiLCBcIkNpbGFudHJvXCIsIFwiQmxhY2sgcGVwcGVyXCIsIFwiSmFsYXBlbm8gcGVwcGVyXCJdLFxyXG4gIH0sXHJcbiAgaXRlbTY6IHtcclxuICAgIG5hbWU6IFwiQmxhY2sgQmVhbiBCdXJyaXRvXCIsXHJcbiAgICBpbWc6IGJsYWNrQmVhbkJ1cnJpdG8sXHJcbiAgICBwcmljZTogMTIsXHJcbiAgICBpbmdyZWRpZW50czogW1xyXG4gICAgICBcIkJsYWNrIGJlYW5zXCIsXHJcbiAgICAgIFwiU291ciBjcmVhbVwiLFxyXG4gICAgICBcIkZsb3VyIHRvcnRpbGxhc1wiLFxyXG4gICAgICBcIlRvbWF0b1wiLFxyXG4gICAgICBcIkdyZWVuIHBlcHBlclwiLFxyXG4gICAgXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudUl0ZW1zO1xyXG4iLCJmdW5jdGlvbiBuYXZCYXJUb2dnbGUoZSkge1xyXG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLm5hdi10b2dnbGVyXCIpKSB7XHJcbiAgICBjb25zdCBuYXZDb2xsYXBzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWNvbGxhcHNlXCIpO1xyXG4gICAgY29uc3QgbmF2TGluZXMgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVcIildO1xyXG5cclxuICAgIG5hdkNvbGxhcHNlLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5XCIpO1xyXG4gICAgbmF2TGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgICBsaW5lLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZMaW5rQ2xhc3NUb2dnbGUoZWxlbWVudCkge1xyXG4gIGNvbnN0IGl0ZW1zID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7ZWxlbWVudH0tbGlua2ApXTtcclxuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG5hdkJhclRvZ2dsZSwgbmF2TGlua0NsYXNzVG9nZ2xlIH07XHJcbiIsImxldCBsYXN0U2Nyb2xsID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdkZsb2F0VG9nZ2xlKCkge1xyXG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbk5hdlwiKTtcclxuICBjb25zdCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gIGlmIChjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbCkge1xyXG4gICAgdG9nZ2xlQ2xhc3Nlc09uU2Nyb2xsRG93bihjdXJyZW50U2Nyb2xsLCBuYXZCYXIpO1xyXG4gICAgbGFzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudFNjcm9sbCA8IGxhc3RTY3JvbGwpIHtcclxuICAgIHRvZ2dsZUNsYXNzZXNPblNjcm9sbFVwKGN1cnJlbnRTY3JvbGwsIG5hdkJhcik7XHJcbiAgICAvLyByZXNldCBsYXN0U2Nyb2xsXHJcbiAgICBpZiAoY3VycmVudFNjcm9sbCA9PT0gMCkge1xyXG4gICAgICBsYXN0U2Nyb2xsID0gMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzZXNPblNjcm9sbERvd24oY3VycmVudFNjcm9sbCwgbWFpbk5hdikge1xyXG4gIGlmIChjdXJyZW50U2Nyb2xsID49IDEwMCkge1xyXG4gICAgbWFpbk5hdi5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsZWRcIik7XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudFNjcm9sbCA+PSAzNTApIHtcclxuICAgIG1haW5OYXYuY2xhc3NMaXN0LmFkZChcImZsb2F0aW5nXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3Nlc09uU2Nyb2xsVXAoY3VycmVudFNjcm9sbCwgbWFpbk5hdikge1xyXG4gIGlmIChjdXJyZW50U2Nyb2xsIDw9IDM1MCkge1xyXG4gICAgbWFpbk5hdi5jbGFzc0xpc3QuYWRkKFwic2xlZXBcIik7XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudFNjcm9sbCA8PSAyNTApIHtcclxuICAgIG1haW5OYXYuY2xhc3NMaXN0LnJlbW92ZShcImZsb2F0aW5nXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRTY3JvbGwgPD0gMTUwKSB7XHJcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGVlcFwiLCBcInNjcm9sbGVkXCIpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IG5hdmJhciwgaGVhZGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9oZWFkZXJcIjtcclxuaW1wb3J0IGluaXRpYWxQYWdlIGZyb20gXCIuL21vZHVsZXMvaW5pdGlhbFBhZ2VcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9tb2R1bGVzL2Fib3V0XCI7XHJcbmltcG9ydCBuYXZGbG9hdFRvZ2dsZSBmcm9tIFwiLi9tb2R1bGVzL25hdkJhck9uU2Nyb2xsXCI7XHJcbmltcG9ydCB7IG5hdkJhclRvZ2dsZSwgbmF2TGlua0NsYXNzVG9nZ2xlIH0gZnJvbSBcIi4vbW9kdWxlcy9uYXZCYXJGdW5jdGlvbnNcIjtcclxuXHJcbmluaXRpYWxQYWdlKCk7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFiU3dpdGNoaW5nKTtcclxuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyVG9nZ2xlKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbmF2RmxvYXRUb2dnbGUpO1xyXG5cclxuZnVuY3Rpb24gdGFiU3dpdGNoaW5nKGUpIHtcclxuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5uYXYtaXRlbVwiKSB8fCBlLnRhcmdldC5tYXRjaGVzKFwiLmxvZ28taGVhZGVyXCIpKSB7XHJcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmhvbWUtbGlua1wiKSB8fCBlLnRhcmdldC5tYXRjaGVzKFwiLmxvZ28taGVhZGVyXCIpKSB7XHJcbiAgICBpbml0aWFsUGFnZSgpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIubWVudS1saW5rXCIpKSB7XHJcbiAgICBjb250ZW50LmFwcGVuZChuYXZiYXIoKSwgaGVhZGVyKFwiU3BlY2lhbHRpZXNcIiksIG1lbnUoKSk7XHJcbiAgICBuYXZMaW5rQ2xhc3NUb2dnbGUoXCJtZW51XCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuYWJvdXQtbGlua1wiKSkge1xyXG4gICAgY29udGVudC5hcHBlbmQobmF2YmFyKCksIGhlYWRlcihcIkFib3V0XCIpLCBhYm91dCgpKTtcclxuICAgIG5hdkxpbmtDbGFzc1RvZ2dsZShcImFib3V0XCIpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=