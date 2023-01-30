const $title = document.querySelector(".nav-title");
const $nav_section = document.querySelectorAll(".nav-item");
const $progress_nar = document.querySelector(".progress-bar");

let timerID;

const scrollMoveTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollMoveSection = (key) => {
  document.querySelector(key).scrollIntoView({ behavior: "smooth" });
};

const throttle = (callback, time) => {
  if (timerID) return;
  timerID = setTimeout(() => {
    callback();
    timerID = undefined;
  }, time);
};

const onScroll = () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollWidth = (scrollTop / height) * 100;
  $progress_nar.style.width = scrollWidth + "%";
};

window.addEventListener("scroll", () => {
  throttle(onScroll, 100);
});

$title.addEventListener("click", scrollMoveTop);

$nav_section.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    let dataKey = `.${e.target.dataset.key}`;
    scrollMoveSection(dataKey);
  });
});
