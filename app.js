let header = document.querySelector("header");
let originHeaderBackGroundColor = header.style.backgroundColor;
let originHeaderColor = header.style.color;

let headerAnchor = document.querySelectorAll("header nav ul li a");

header.style.transition = "all 0.25s ease";

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    header.style.color = "white";
    headerAnchor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style.backgroundColor = originHeaderBackGroundColor;
    header.style.color = originHeaderColor;
    headerAnchor.forEach((a) => {
      a.style.color = "#09777d";
    });
  }
});
