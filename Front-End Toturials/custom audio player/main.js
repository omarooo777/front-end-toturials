// play and pause audio
let audio = document.querySelector("audio");
let playStatus = false;

let playPauseIcon = document.getElementById("play-pause");

playPauseIcon.addEventListener("click", () => {
  playPause();
});

function playPause() {
  if (playStatus === false) {
    playPauseIcon.className = "fas fa-pause";
    audio.play();
    playStatus = true;
  } else {
    playPauseIcon.className = "fas fa-play";
    audio.pause();
    playStatus = false;
  }
}

// audio volume

let volume = document.querySelector(".sound-control input");

volume.addEventListener("change", () => {
  audio.volume = volume.value / 100;
});

// time line

function formatTime(time) {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
}

let durationInput = document.querySelector(".player input");
let currentTime = document.querySelector(".player span");

// audio.addEventListener("loadedmetadata", () => {
//   let endTime = document.querySelector(".player span:last-child");
//   timeLineInput.value = audio.currentTime;
//   timeLineInput.setAttribute("max", audio.duration);
//   currentTime.innerHTML = `${formatTime(audio.currentTime)}`;
//   endTime.innerHTML = `${formatTime(audio.duration)}`;
// });

// audio.addEventListener("timeupdate", () => {
//   timeLineInput.value = audio.currentTime;
//   // timeLineInput.setAttribute("max", audio.duration);
//   currentTime.innerHTML = `${formatTime(audio.currentTime)}`;
//   let endTime = document.querySelector(".player span:last-child");

//   endTime.innerHTML = `${formatTime(audio.duration)}`;
// });

// timeLineInput.addEventListener("change", () => {
//   audio.currentTime = timeLineInput.value;
// });



audio.addEventListener("loadedmetadata", () => {
  const endTime = document.querySelector(".player span:last-child");
  durationInput.value = audio.currentTime;
  durationInput.setAttribute("max", audio.duration);
  currentTime.innerHTML = `${formatTime(audio.currentTime)}`;
  endTime.innerHTML = `${formatTime(audio.duration)}`;
});

audio.addEventListener("timeupdate", () => {
  durationInput.value = audio.currentTime;
  currentTime.innerHTML = `${formatTime(audio.currentTime)}`;
  const endTime = document.querySelector(".player span:last-child");
  durationInput.value = audio.currentTime;
  durationInput.setAttribute("max", audio.duration);
  currentTime.innerHTML = `${formatTime(audio.currentTime)}`;
  endTime.innerHTML = `${formatTime(audio.duration)}`;
});

durationInput.addEventListener("change", () => {
  playStatus = false;
  playPause()
  audio.currentTime = durationInput.value;
});