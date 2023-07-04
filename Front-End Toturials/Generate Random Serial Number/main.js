let serialDiv = document.querySelector(".serial");
let generateSpan = document.querySelector(".generate");

generateSpan.addEventListener("click", function () {
  let chars =
    "qwerD1F!GHty5a&Z7QWE0RTYz4xcvb%mnASJKLMNB#iop6lk2jhgf$dsVCXU@3I8*O9P";
  let lengthOfChars = 10;
  let count = chars.length;
  let serialCode = "";
  for (let i = 0; i < lengthOfChars; i++) {
    let randomNum = Math.floor(Math.random() * count);
    serialCode += chars[randomNum];
  }
  serialDiv.innerHTML = serialCode;
});
