let imgs = document.querySelectorAll('.img');
for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function () {
    openModal();
    currentSlide(i + 1);
  }
}

let modal = document.querySelector('.modal');
modal.onclick = function(e) {
  let el = e ? e.target : window.EventSource;
  if (el.className === 'modal') closeModal();
}

let closeCursor = document.querySelector('.close.cursor');
closeCursor.onclick = function () {
  closeModal();
}

let prev = document.querySelector('.prev');
prev.onclick = function () {
  plusSlides(-1);
}

let next = document.querySelector('.next');
next.onclick = function () {
  plusSlides(1);
}

let columns = document.querySelectorAll('.column img');
for (let i = 0; i < columns.length; i++) {
  columns[i].onclick = function () {
    currentSlide(i + 1);
  }
}


function openModal() {
  document.querySelector('.modal').style.display = "block";
}

function closeModal() {
  document.querySelector('.modal').style.display = "none";
}


let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}