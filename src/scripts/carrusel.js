import Swiper, { EffectCoverflow } from "swiper";

const swiperHero = new Swiper(".hero__swiper", {
  spaceBetween: 30,
  loop: "true",
});

const prevButtonHero = document.querySelector("#swiper-hero__prev-id");
prevButtonHero.addEventListener("click", () => {
  swiperHero.slidePrev();
});
const nextButtonHero = document.querySelector("#swiper-hero__next-id");
nextButtonHero.addEventListener("click", () => {
  swiperHero.slideNext();
});

const swiperDesigns = new Swiper(".designs__swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: "true",
  lazy: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
const swiperDesigns2 = new Swiper(".designs__swiper2", {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: "true",
  lazy: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const prevButtonDesigns = document.querySelector("#swiper-designs__prev-id1");
prevButtonDesigns.addEventListener("click", () => {
  swiperDesigns.slidePrev();
});
const nextButtonDesigns = document.querySelector("#swiper-designs__next-id1");
nextButtonDesigns.addEventListener("click", () => {
  swiperDesigns.slideNext();
});
const prevButtonDesigns2 = document.querySelector("#swiper-designs__prev-id2");
prevButtonDesigns2.addEventListener("click", () => {
  swiperDesigns2.slidePrev();
});
const nextButtonDesigns2 = document.querySelector("#swiper-designs__next-id2");
nextButtonDesigns2.addEventListener("click", () => {
  swiperDesigns2.slideNext();
});

const radioGarden = document.querySelector("#garden-rooms__id");
radioGarden.addEventListener("change", (e) => {
  if (e.currentTarget.value === "on") {
    document.querySelector("#designs-garden__swiper_id").style.display =
      "block";
    document.querySelector("#designs-modular__swiper_id").style.display =
      "none";
  } else {
    document.querySelector("#designs-garden__swiper_id").style.display = "none";
    document.querySelector("#designs-modular__swiper_id").style.display =
      "block";
  }
});
const radioModular = document.querySelector("#modular-rooms__id");
radioModular.addEventListener("change", (e) => {
  if (e.currentTarget.value === "on") {
    document.querySelector("#designs-modular__swiper_id").style.display =
      "block";
    document.querySelector("#designs-garden__swiper_id").style.display = "none";
  } else {
    document.querySelector("#designs-modular__swiper_id").style.display =
      "none";
    document.querySelector("#designs-garden__swiper_id").style.display =
      "block";
  }
});

const swiperShowcase = new Swiper(".showcase__swiper", {
  loop: "true",
  lazy: true,
  modules: [EffectCoverflow],
  slidesPerView: 1,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 200,
    modifier: 3,
    slideShadows: false,
  },
  breakpoints: {
    768: {
      centeredSlides: true,

      slidesPerView: "auto",
    },
  },
});

document
  .querySelector("#swiper-showcase__prev-id")
  .addEventListener("click", () => {
    swiperShowcase.slidePrev();
  });
document
  .querySelector("#swiper-showcase__next-id")
  .addEventListener("click", () => {
    swiperShowcase.slideNext();
  });
