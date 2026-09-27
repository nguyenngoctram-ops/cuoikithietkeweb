const backtotop = document.getElementById("backtotop");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backtotop.style.display = "block";
  } else {
    backtotop.style.display = "none";
  }
});
backtotop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
