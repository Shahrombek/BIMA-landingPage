$(".header-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".slider-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [$(".am-next"), $(".am-prev")],
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    920: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

$(".owl-carousel-reviews").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  autoplaySpeed: 1000,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    920: {
      items: 2,
    },
  },
});

$(".partner-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    920: {
      items: 4,
    },
    1200: {
      items: 5,
    },
    1400: {
      items: 6,
    },
  },
});

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function (e) {
  if (window.scrollY > 140) {
    navbar.classList.add("navbar-bg");
  } else {
    navbar.classList.remove("navbar-bg");
  }
});

const openNavbar = (isOpen) => {
  const navMenu = document.querySelector(".nav-menu");
  isOpen
    ? (navMenu.style.transform = "translate(0)")
    : (navMenu.style.transform = "translate(-100%)");
};
