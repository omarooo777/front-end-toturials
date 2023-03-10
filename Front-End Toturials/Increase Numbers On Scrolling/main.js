let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");

let start = false
window.addEventListener("scroll", scrolling)

function scrolling() {
  if(window.scrollY >= section.offsetTop) {
    if(!start) {
      nums.forEach((num) => startCount(num))
    }
    start = true
  }
}

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 5000 / goal);
}
