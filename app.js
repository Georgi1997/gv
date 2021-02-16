//Initialize WOW on scroll anim
new WOW().init();
//ANIMATE NAVBAR ITEMS

const navLinks = document.querySelectorAll(".navbar__item");

const animateNavItem = function () {
  navLinks.forEach(function (link, index) {
    link.style.animation = `shake 1s linear ${index / 4 + 1.3}s`;
  });
};

animateNavItem();

//ANIMATE Carousel

const hiddenCard = document.querySelectorAll(".project__info");

const hoverAction = function () {
  hiddenCard.forEach(function (link, i) {
    link.addEventListener("mouseover", function () {
      link.style.opacity = 1;
    });
    link.addEventListener("mouseout", function () {
      link.style.opacity = 0;
    });
  });
};

hoverAction();

//B2TOP BTN

const b2t = document.querySelector(".b2t");

b2t.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

////Sticky navbar
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 5);
});

//Responsive navbar
//Responsive navbar

const navList = document.querySelector(".navbar__list");
const menuBtn = document.querySelector(".burger");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-active");
  menuBtn.classList.toggle("triggerAnim");
});
