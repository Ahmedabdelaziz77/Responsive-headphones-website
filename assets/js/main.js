/*=============== SHOW MENU ===============*/
const [navMenu, navToggle, navClose] = [
  document.getElementById("nav-menu"),
  document.getElementById("nav-toggle"),
  document.getElementById("nav-close"),
];
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) =>
  link.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  })
);
/*=============== ADD BLUR HEADER ===============*/
const header = document.getElementById("header");
window.addEventListener("scroll", function () {
  if (this.scrollY >= 50) header.classList.add("blur-header");
  else header.classList.remove("blur-header");
});
/*=============== SWIPER FAVORITES ===============*/
let swiperFavorite = new Swiper(".favorite__swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  grapCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});
/*=============== SHOW SCROLL UP ===============*/
const scrollup = document.getElementById("scroll-up");
window.addEventListener("scroll", function () {
  if (this.scrollY >= 350) scrollup.classList.add("scrollup-show");
  else scrollup.classList.remove("scrollup-show");
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// section element have an id attribute
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", function () {
  const scrollDown = window.scrollY;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id"),
      sectionLink = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    console.log(sectionTop, sectionId, sectionLink, sectionHeight, scrollDown);
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionLink.classList.add("active-link");
    } else sectionLink.classList.remove("active-link");
  });
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});
sr.reveal(".home__social,.favorite__container, .sponsor__container, .footer");
sr.reveal(".home__title span:nth-child(1)", { origin: "left", opacity: 1 });
sr.reveal(".home__title span:nth-child(3)", { origin: "right", opacity: 1 });
sr.reveal(".home__tooltip, .home__button, .model__button", {
  origin: "bottom",
});
sr.reveal(".about__data", { origin: "left" });
sr.reveal(".about__image, .model__tooltip", { origin: "right" });
