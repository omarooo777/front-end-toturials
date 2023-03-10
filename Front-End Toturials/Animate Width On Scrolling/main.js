let spans = document.querySelectorAll(".progress span");
let section = document.querySelector(".three");

// window.addEventListener("scroll", scrolling);

// function scrolling() {
//   if (window.scrollY >= section.offsetTop) {
//     span.forEach((el) => {
//       el.style.width = el.dataset.width;
//     });
//   }
// }

window.onscroll = function () {
  if(window.scrollY >= section.offsetTop) {
    spans.forEach(span => {
      span.style.width = span.dataset.width
    })
  }
}