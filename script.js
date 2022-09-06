function scroll() {
  const headerLinksInternos = document.querySelectorAll(
    '.js-scroll a[href^="#"]'
  );

  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  headerLinksInternos.forEach((linkInterno) => {
    linkInterno.addEventListener("click", scrollSuave);
    linkInterno.addEventListener("touchEvent", scrollSuave);
  });
}
scroll();
