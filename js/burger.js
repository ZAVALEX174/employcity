document.addEventListener("DOMContentLoaded", function () {
  const navigationMenu = document.querySelector(".navigation");
  const burgerBtn = document.querySelector(".burger");
  const menuItems = document.querySelectorAll(".navigation__item");

  if (!navigationMenu && !burgerBtn && !menuItems) {
    return

  } else {
    const openBurgerMenu = () => {
      navigationMenu.classList.toggle("navigation__active");
      burgerBtn.classList.toggle("burger__active");
    }

    const closeBurgerMenu = () => {
      navigationMenu.classList.remove("navigation__active");
    }

    menuItems.forEach(menuItem => {
      menuItem.addEventListener("click", function () {
        closeBurgerMenu();
      })
    })



    burgerBtn.addEventListener("click", openBurgerMenu);
  }
})