const $title = document.querySelector(".nav-title");
const $nav_section = document.querySelectorAll(".nav-item");

const ScrollMoveTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ScrollMoveSection = (key) => {
  document.querySelector(key).scrollIntoView({ behavior: "smooth" });
};

$title.addEventListener("click", ScrollMoveTop);

$nav_section.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    let dataKey = `.${e.target.dataset.key}`;
    ScrollMoveSection(dataKey);
  });
});
