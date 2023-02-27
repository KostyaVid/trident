const filters = document.querySelectorAll(".gellary__select");

filters.forEach((el) => {
  el.addEventListener("change", () => {
    document.querySelector(".gellary__submit").click();
  });
});
