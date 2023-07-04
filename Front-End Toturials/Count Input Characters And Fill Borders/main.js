let userInput = document.querySelector(".user-input");
let progress = document.querySelector(".progress");
let count = document.querySelector(".count");
let maxLength = userInput.getAttribute("maxlength");
count.innerHTML = maxLength;

userInput.oninput = function () {
  let inputLength =  userInput.value.length
  count.innerHTML = maxLength - inputLength;
  count.innerHTML == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");
  progress.style.width = `${(inputLength * 100) / maxLength}%`
};
