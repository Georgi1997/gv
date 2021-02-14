const navLinks = document.querySelectorAll(".navbar__item");

const animateNavItem = function () {
  navLinks.forEach(function (link, index) {
    link.style.animation = `shake 1s linear ${index / 4 + 1.3}s`;
  });
};

animateNavItem();

//ANIMATE Carousel

const hiddenCard = document.querySelectorAll(".project__info");

// const hoverAction = function () {
//   for (const x of hiddenCard) {
//     x.addEventListener("mouseover", function () {
//       x.style.opacity = 1;
//     });
//   }
//   for (const y of hiddenCard) {
//     y.addEventListener("mouseout", function () {
//       y.style.opacity = 0;
//     });
//   }
// };
// hoverAction();

const hoverAction = function () {
  hiddenCard.forEach(function (link, index) {
    link.addEventListener("mouseover", function () {
      link.style.opacity = 1;
    });
    link.addEventListener("mouseout", function () {
      link.style.opacity = 0;
    });
  });
};

hoverAction();
