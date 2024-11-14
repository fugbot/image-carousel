let imgIndex = 0;
let images = document.getElementsByClassName("image-slide");
//dots
const dotContainer = document.querySelector(".dot-container");
function initDots() {
  for (i = 0; i < images.length; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dotContainer.appendChild(dot);
  }
}
initDots();

showImages(imgIndex);

function showImages(n) {
  let i;
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[n].style.display = "block";

  let dots = document.querySelectorAll(".dot");
  for (i = 0; i < images.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[n].className += " active";
}

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

nextBtn.addEventListener("click", () => {
  if (imgIndex < images.length - 1) {
    showImages((imgIndex += 1));
  }
});

prevBtn.addEventListener("click", () => {
  if (imgIndex > 0) {
    showImages((imgIndex -= 1));
  }
});

// function highlightDots() {
//   for(i=0)
// }
