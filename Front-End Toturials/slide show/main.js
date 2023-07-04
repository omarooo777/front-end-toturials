// W3schools
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slides = document.querySelectorAll(".my-slides");
let dots = document.querySelectorAll(".dot");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(el) {
  if (el > slides.length) {
    slideIndex = 1;
  } else if (el < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(function (el) {
    el.style.display = "none";
  });

  dots.forEach(function (el, i) {
    el.onclick = function () {
      currentSlide(i + 1);
    };
    dots.forEach(function (el) {
      el.classList.remove("active");
    });
    dots[slideIndex - 1].classList.add("active");
  });

  slides[slideIndex - 1].style.display = "block";
}

prev.onclick = function () {
  plusSlide(-1);
};
next.onclick = function () {
  plusSlide(1);
};

// Elzero

let slidesImgs = Array.from(document.querySelectorAll(".container-slider img"));

let slideCount = slidesImgs.length;

let currentIndex = 1;

let slideNumber = document.getElementById("slider-number");

let paginationElement = document.createElement("ul");

paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slideCount; i++) {
  let paginationItems = document.createElement("li");
  paginationItems.setAttribute("data-index", i);
  paginationItems.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItems);
}

let indecatorsElement = document.getElementById("indecators");
indecatorsElement.appendChild(paginationElement);

let prevBtn = document.getElementById("prev-slider");
let nextBtn = document.getElementById("next-slider");

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

let paginationUl = document.getElementById("pagination-ul");
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

paginationBullets.forEach(function(bullet) {
  bullet.addEventListener("click", function() {
    currentIndex = parseInt(this.getAttribute("data-index"))
    checker();
  })
})

checker();

function prevSlide() {
  if (!prevBtn.classList.contains("disabled")) {
    currentIndex--;
    checker();
  }
}

function nextSlide() {
  if (!nextBtn.classList.contains("disabled")) {
    currentIndex++;
    checker();
  }
}

function checker() {
  slideNumber.textContent = `Slide #${currentIndex} Of ${slideCount}`;
  removeActiveClass();
  slidesImgs[currentIndex - 1].classList.add("active");
  paginationBullets[currentIndex - 1].classList.add("active");
  if (currentIndex == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (currentIndex == slideCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

function removeActiveClass() {
  slidesImgs.forEach(function (img) {
    img.classList.remove("active");
  });
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
