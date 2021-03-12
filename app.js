//Initialize WOW on scroll anim
new WOW().init();

// variables
const navList = document.querySelector(".navbar__list");
const navItems = document.querySelectorAll(".navbar__item");
const hiddenCard = document.querySelectorAll(".project__info");
const b2t = document.querySelector(".b2t");
const tops = document.querySelector("#header--top");
const header = document.querySelector(".header");
const nav = document.querySelector(".navbar");
const menuBtn = document.querySelector(".burger");
//ANIMATE NAVBAR ITEMS

const animateNavItem = function () {
  navItems.forEach(function (link, index) {
    link.style.animation = `shake 1s linear  ${index / 4 + 1.3}s`;
  });
};

animateNavItem();

//ANIMATE Carousel

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

b2t.addEventListener("click", () => {
  tops.scrollIntoView({
    behavior: "smooth",
  });
});

//Nav item scroll to
navList.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("navbar__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

////Sticky navbar

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.7,
});

headerObserver.observe(header);

//Responsive navbar
//Responsive navbar

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-active");
  menuBtn.classList.toggle("triggerAnim");
});
