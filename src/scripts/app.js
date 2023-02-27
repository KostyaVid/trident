import enquire from "enquire.js";
import mobileInit from "./mobileInit";

const [mobileSetState, mobileClearState] = mobileInit();

const menuDropdown = document.querySelectorAll(".header__dropdown");
function handleClickDropdown(event) {
  const ulDropDown = event.currentTarget.closest("li").querySelector("ul");
  ulDropDown.classList.toggle("dropdown-active");
}
menuDropdown.forEach((el) => {
  el.addEventListener("click", handleClickDropdown);
});

enquire.register("screen and (max-width:768px)", {
  match: function () {
    mobileSetState();
  },
  unmatch: function () {
    mobileClearState();
  },
  setup: function () {},

  destroy: function () {},

  deferSetup: false,
});
