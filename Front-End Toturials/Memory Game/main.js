document.querySelector(".control-button span").onclick = function () {
  // Normal Test Without Split
  let yourName = prompt("What Is Your Name?");
  // document.querySelector(".name span").innerHTML = yourName || "Unknown";

  // With Split:

  if (yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = "Unknown";
  } else {
    let name = yourName.split(" ");
    if (name.length >= 3) {
      name.length = 2;
    }
    document.querySelector(".name span").innerHTML = name.join(" ");
  }
  document.querySelector(".control-button").remove();
};

let duration = 1000;

let bolcksContainer = document.querySelector(".game-container");
let blocks = Array.from(bolcksContainer.children);
let orderRange = [...Array(blocks.length).keys()];
// console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange);

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  block.addEventListener("click", () => {
    flippe(block);
  });
});

function flippe(selectedBlock) {
  selectedBlock.classList.add("is-flipped");
  let allFlippedBlocks = blocks.filter((flippedBlock) =>
    flippedBlock.classList.contains("is-flipped")
  );
  if (allFlippedBlocks.length === 2) {
    // console.log("Two Flipped Blocks");
    stopClicking();
    checkMatch(allFlippedBlocks[0], allFlippedBlocks[1]);
  }
}

function stopClicking() {
  bolcksContainer.classList.add("no-clicking");
  setTimeout(() => {
    bolcksContainer.classList.remove("no-clicking");
  }, duration);
}

function checkMatch(firstBlock, secondBlock) {
  let wrongTries = document.querySelector(".wrong-tries span");
  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");
    firstBlock.classList.add("has-matched");
    secondBlock.classList.add("has-matched");
    document.getElementById("success").play();
  } else {
    setTimeout(() => {
      wrongTries.innerHTML = parseInt(wrongTries.innerHTML) + 1;
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration)
    document.getElementById("failed").play();
  }
}

function shuffle(arr) {
  let current = arr.length;
  while (current > 0) {
    let random = Math.floor(Math.random() * current);
    current--;
    [arr[current], arr[random]] = [arr[random], arr[current]];
    // let temp;
    // temp = arr[current];
    // arr[current] = arr[random];
    // arr[random] = temp;
  }
  return arr;
}
