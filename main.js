const mouseCursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".nav-links li");
const image = document.querySelector(".image");
const frontCover = document.querySelector(".front-cover");
const anotherCover = document.querySelector(".another-cover");
const nav = document.querySelector("nav");
const mouseCursorImage = document.querySelector(".mouseCursorImage");

window.addEventListener("mousemove", newcursor);
function newcursor(e) {
  mouseCursorImage.style.top = e.pageY + "px";
  mouseCursorImage.style.left = e.pageX + "px";
}

window.addEventListener("mousemove", cursor);
function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

links.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});

frontCover.addEventListener("mouseleave", function () {
  nav.classList.remove("new-nav");
  anotherCover.classList.remove("front-cover-appear");
});
frontCover.addEventListener("mouseover", function () {
  nav.classList.add("new-nav");
  anotherCover.classList.add("front-cover-appear");
});

image.addEventListener("mouseleave", () => {
  mouseCursorImage.classList.remove("mouseCursorImage");
  mouseCursor.style.display = "inline";
  mouseCursorImage.style.display = "none";
  image.style.transform = "none";
});

image.addEventListener("mouseover", () => {
  mouseCursorImage.classList.add("mouseCursorImage");
  mouseCursor.style.display = "none";
  mouseCursorImage.style.display = "inline";
  image.style.transform = "scale(1.2)";
});
