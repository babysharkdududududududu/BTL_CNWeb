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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
