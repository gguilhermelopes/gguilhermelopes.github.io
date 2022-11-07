import ScrollSuave from "./scroll-suave.js";
import ScrollAnima from "./scroll-anima.js";

const scrollSuave = new ScrollSuave('.js-scroll a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima(".js-suave");
scrollAnima.init();
