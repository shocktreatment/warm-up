let slideUp = (target, duration = 300) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.border = "none";

  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "grid";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.border = "none";

  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  target.style.removeProperty("border");

  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};

function courseProgram() {
  const items = document.querySelectorAll(".course-program__item");
  const trigers = document.querySelectorAll(".course-program__triger");
  const contents = document.querySelectorAll(".course-program__content-list");

  trigers.forEach((box, idx) => {
    box.addEventListener("click", () => {
      const parent = box.parentNode;

      if (!parent.classList.contains("active")) {
        parent.classList.add("active");
        slideDown(contents[idx]);
      } else {
        parent.classList.remove("active");
        slideUp(contents[idx]);
      }
    });
  });
}

courseProgram();

function question() {
  const items = document.querySelectorAll(".question-item");
  const trigers = document.querySelectorAll(".question__triger");
  const contents = document.querySelectorAll(".answer");

  trigers.forEach((box, idx) => {
    box.addEventListener("click", () => {
      const parent = box.parentNode;

      if (!parent.classList.contains("active")) {
        parent.classList.add("active");
        slideDown(contents[idx]);
      } else {
        parent.classList.remove("active");
        slideUp(contents[idx]);
      }
    });
  });
}

question();


function lesone() {
  const items = document.querySelectorAll(".lesson-one");
  const trigers = document.querySelectorAll(".lesone-triger");
  const contents = document.querySelectorAll(".lesson-one_list");

  trigers.forEach((box, idx) => {
    box.addEventListener("click", () => {
      const parent = box.parentNode;

      if (!parent.classList.contains("active")) {
        parent.classList.add("active");
        slideDown(contents[idx]);
      } else {
        parent.classList.remove("active");
        slideUp(contents[idx]);
      }
    });
  });
}

lesone();