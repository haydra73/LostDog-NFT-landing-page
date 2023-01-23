var rellax = new Rellax(".parallax");

////// nav menu

let link = document.getElementById("link");
let burger = document.getElementById("burger");
let ul = document.querySelector("ul.mobile-menu");

link.addEventListener("click", function (e) {
  e.preventDefault();
  burger.classList.toggle("open");
  ul.classList.toggle("open");
});

/*====== ANIMATE GSAP ======*/
/*Navbar*/
gsap.from(".home__text", {
  opacity: 0,
  duration: 2,
  delay: 0.4,
  y: 30,
  ease: "expo.out",
});

gsap.from(".home__header--img", {
  opacity: 0,
  duration: 2,
  delay: 0.9,
  y: 35,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".home__buy", {
  opacity: 0,
  duration: 2,
  delay: 0.9,
  x: 30,
  ease: "expo.out",
});

////////slider

const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

/////////accordion

// Listen for click on the document
document.addEventListener("click", function (event) {
  //Bail if our clicked element doesn't have the class
  if (!event.target.classList.contains("accordion-toggle")) return;

  // Get the target content
  var content = document.querySelector(event.target.hash);
  if (!content) return;

  // Prevent default link behavior
  event.preventDefault();

  // If the content is already expanded, collapse it and quit
  if (content.classList.contains("active")) {
    content.classList.remove("active");
    return;
  }

  // Get all open accordion content, loop through it, and close it
  var accordions = document.querySelectorAll(".accordion-content.active");
  var arrows = document.querySelectorAll(".accordion-arrow.active");
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("active");
    arrows[i].classList.remove("active");
  }

  // Toggle our content
  content.classList.toggle("active");
});
////////////////stop watch

const countDown = () => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "12/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText =
        Math.floor(distance / day) + " :"),
        (document.getElementById("hours").innerText =
          Math.floor((distance % day) / hour) + " :"),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        ));

      //do something later when date is reached
      //seconds
    }, 0);
};

countDown();

////////////quantity

function increaseValue(button, limit) {
  const numberInput = button.parentElement.querySelector(".number");
  var value = parseInt(numberInput.innerHTML, 10);
  if (isNaN(value)) value = 0;
  if (limit && value >= limit) return;
  numberInput.innerHTML = value + 1;
}

function decreaseValue(button) {
  const numberInput = button.parentElement.querySelector(".number");
  var value = parseInt(numberInput.innerHTML, 10);
  if (isNaN(value)) value = 0;
  if (value < 1) return;
  numberInput.innerHTML = value - 1;
}

///////////popup
