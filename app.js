const $onTopBtn = document.querySelector(".on-top-btn");
const $nav_section = document.querySelectorAll(".nav-item");
const $progress_nar = document.querySelector(".progress-bar");
const $modalContainer = document.getElementsByClassName("modal-container");
const $infoBtn = document.getElementsByClassName("project-info-btn");
const $closeBtn = document.getElementsByClassName("close-btn");

let timerID;

const scrollMoveTop = () => {
  window.scrollTo({ top: "0", behavior: "smooth" });
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

const modal = (num) => {
  $infoBtn[num].addEventListener("click", () => {
    $modalContainer[num].style.display = "flex";
    document.body.style.overflow = "hidden";
  });
  $closeBtn[num].addEventListener("click", () => {
    $modalContainer[num].style.display = "none";
    document.body.style.overflow = "unset";
  });
};

for (let i = 0; i < $closeBtn.length; i++) {
  modal(i);
}

window.addEventListener("scroll", () => {
  throttle(onScroll, 100);
});

$onTopBtn.addEventListener("click", scrollMoveTop);

$nav_section.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    let dataKey = `.${e.target.dataset.key}`;
    scrollMoveSection(dataKey);
  });
});
