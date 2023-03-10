let icon = document.querySelector(".toggle-menu");
let btn = document.querySelector(".drop-down")

icon.addEventListener("click", () => {
  btn.classList.toggle("closed")
})