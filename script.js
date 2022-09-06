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

function animacaoScroll() {
  const secoesScrollSuave = document.querySelectorAll(".js-suave");

  if (secoesScrollSuave.length) {
    const windowMetade = innerHeight * 0.6;

    function animaScroll() {
      secoesScrollSuave.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
animacaoScroll();
