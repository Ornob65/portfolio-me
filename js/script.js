// typing effect

let typed = new Typed('#auto_type',{
    strings: ['Front End Developer', 'Freelancer', 'Designer'],
    typeSpeed: 75,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

// slider
$('.client_opinion').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
  });

//   form
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
