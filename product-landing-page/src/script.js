const projectName = "product-landing-page";

document.addEventListener("scroll", function (e) {
  last_scroll_position = window.scrollY;
  var header = document.querySelector("header");
  if (last_scroll_position > 10) {
    header.classList.add("black-transparent");
  } else {
    header.classList.remove("black-transparent");
  }
});