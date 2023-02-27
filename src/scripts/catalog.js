document.querySelector("#sortID").addEventListener("change", () => {
  document.querySelector("[data-sort]").click();
});

const sort = document.querySelector(".filter__mobile");

sort.addEventListener("click", () => {
  const filter = document.querySelector(".catalog__filter");
  filter.classList.add("filter_active");
  document.querySelector("html").style.overflowY = "hidden";
});

document.querySelector(".form__reset").addEventListener("click", () => {
  const filter = document.querySelector(".catalog__filter");
  if (filter.classList.contains("filter_active")) {
    filter.classList.remove("filter_active");
    document.querySelector("html").style.overflowY = "auto";
  }
});
