var index = 1;
var n = 0;
function changebanner() {
  var imgs = [
    "../style/img/DH-1.jpg",
    "../style/img/DH-11.jpg",
    "../style/img/DH-12.jpg",
    "../style/img/DH-13.jpg",
  ];
  document.getElementById("banner").src = imgs[index];
  index++;
  if (index == 4) {
    index = 0;
  }
}

function chon() {
  var slides = document.getElementsByClassName("CT-IMain");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.border = "none";
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("mouseenter", function () {
      document.getElementById("CT-mainpic").src = slides[i].src;

      slides[i].style.border = "solid 1px red";
    });
  }
}
