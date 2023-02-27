import Swiper, { Thumbs, Navigation } from "swiper";

function openTab(button) {
  const tabcontent = document.querySelectorAll(".tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  const tablinks = document.querySelectorAll(".tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
    tablinks[i].ariaSelected = null;
  }

  document.getElementById(button.getAttribute("aria-controls")).style.display =
    "block";
  button.classList.add("active");
  button.ariaSelected = "true";
}

const buttons = document.querySelectorAll(".tablinks");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    openTab(button);
  });

  const swiper = new Swiper(
    "#" + button.getAttribute("aria-controls") + " .mySwiper",
    {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      modules: [Thumbs],
    }
  );
  const swiper2 = new Swiper(
    "#" + button.getAttribute("aria-controls") + " .mySwiper2",
    {
      spaceBetween: 10,
      modules: [Thumbs, Navigation],
      navigation: {
        nextEl:
          "#" + button.getAttribute("aria-controls") + " .swiper__button_next",
        prevEl:
          "#" + button.getAttribute("aria-controls") + " .swiper__button_prev",
      },
      thumbs: {
        swiper: swiper,
      },
    }
  );
});

document.querySelector("[defaultopen]").click();
