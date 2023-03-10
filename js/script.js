import ScrollSuave from "./scroll-suave.js";
import ScrollAnima from "./scroll-anima.js";
import SlideNav from "./slide.js";
import Slide from "./stories.js";

const scrollSuave = new ScrollSuave('.js-scroll a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima(".js-suave");
scrollAnima.init();

const slide = new SlideNav(".slides", ".slides-container");
slide.init();

slide.addControl();

const openModalButton = document.querySelector(".button-modal");
const modal = document.querySelector(".modalWrapper");

const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");

if (container && elements && controls && elements.children.length) {
  const stories = new Slide(container, Array.from(elements.children), controls);
  stories.init();
  stories.pauseInstant();

  const handleModalInit = ({ target }) => {
    modal.classList.add("active");
    stories.continue();
  };

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      stories.pauseInstant();
      modal.classList.remove("active");
    }
  };

  modal.addEventListener("click", handleOutsideClick);
  openModalButton.addEventListener("pointerup", handleModalInit);
}
