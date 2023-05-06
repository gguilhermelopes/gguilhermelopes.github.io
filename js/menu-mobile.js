export default class MenuMobile {
  constructor(menuButton, menuMobile) {
    this.menuButton = document.querySelector(menuButton);
    this.menuMobile = document.querySelector(menuMobile);
    this.showMenuMobile = this.showMenuMobile.bind(this);
    this.hideMenuMobile = this.hideMenuMobile.bind(this);
  }

  showMenuMobile() {
    this.menuMobile.classList.add("active");
  }

  hideMenuMobile({ currentTarget, target }) {
    if (currentTarget === target || target.tagName === "A") {
      this.menuMobile.classList.remove("active");
    }
  }

  openMenuMobile() {
    this.menuButton.addEventListener("click", this.showMenuMobile);
  }

  closeMenuMobile() {
    this.menuMobile.addEventListener("click", this.hideMenuMobile);
  }

  init() {
    this.openMenuMobile();
    this.closeMenuMobile();
    return this;
  }
}
