let imgIndex = 0;
let images = document.getElementsByClassName("image-slide");
showImages(imgIndex);

function showImages(n) {
  let i;
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[n].style.display = "block";
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
