let allInputs = document.querySelectorAll("input[type='search']")
let submit = document.querySelector("button[type='submit']")

submit.onclick = function(e) {
  e.preventDefault()
}


allInputs.forEach(function(el) {
  el.onfocus = function () {
    document.onkeyup = function(e) {
      if(e.key === "Enter") {
        el.blur()
      }
    }
  }
})