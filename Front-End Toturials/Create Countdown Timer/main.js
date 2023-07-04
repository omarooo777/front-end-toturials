// let countDownDate = new Date("jan, 2024 23:59:59");
let countDownDate = new Date();
countDownDate.setFullYear(2024, 0, 0);
countDownDate.setHours(23, 59, 59);
// console.log(countDownDate)

let count = setInterval(function () {
  let date = new Date();
  let dateDifference = countDownDate.getTime() - date.getTime();
  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);
  // console.log(seconds);

  document.querySelector(".days").innerHTML = `${
    days < 100 ? `0${days}` : days
  } : `;
  document.querySelector(".hours").innerHTML = `${
    hours < 10 ? `0${hours}` : hours
  } : `;
  document.querySelector(".minutes").innerHTML = `${
    minutes < 10 ? `0${minutes}` : minutes
  } : `;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDifference < 0) {
    clearInterval(count);
  }
}, 1000);
