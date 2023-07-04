let tabs = document.querySelectorAll(".tabs li");
let contents = document.querySelectorAll(".content p");

tabs.forEach((tab) => {
  tab.onclick = function () {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    this.classList.add("active");
    contents.forEach(function(content) {
      content.classList.remove("active")
    })
    document.querySelector(this.dataset.content).classList.add("active")
    // console.log(document.querySelector(this.dataset.content))
  };
});
