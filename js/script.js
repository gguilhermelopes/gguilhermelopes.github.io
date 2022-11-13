import ScrollSuave from "./scroll-suave.js";
import ScrollAnima from "./scroll-anima.js";
import SlideNav from "./slide.js";

const scrollSuave = new ScrollSuave('.js-scroll a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima(".js-suave");
scrollAnima.init();

const slide = new SlideNav(".slides", ".slides-container");
slide.init();

slide.addControl();
