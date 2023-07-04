let list = document.querySelectorAll(".switch li");
let allImgs = document.querySelectorAll(".gallery img");
allImgs.forEach((e) => {
  e.setAttribute("draggable", false)
})

list.forEach((el) => {
  el.onclick = function () {
    list.forEach((el) => {
      el.classList.remove("active");
    });
    this.classList.add("active");
    allImgs.forEach((img) => {
      img.style.display = "none";
      img.style.opacity = 0;
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
      setTimeout(() => {
        el.style.opacity = 1;
      }, 20);
    });
  };
});
