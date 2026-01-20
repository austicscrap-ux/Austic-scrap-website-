let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};
document.addEventListener("DOMContentLoaded", function () {
  let nav = document.querySelector(".navbar");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
      nav.classList.add("header-scrolled");
    } else {
      nav.classList.remove("header-scrolled");
    }
  };
  let navBar = document.querySelectorAll(".nav-link");
  let navCollapse = document.querySelector(".navbar-collapse.collapse");
  navBar.forEach(function (a) {
    a.addEventListener("click", function () {
      navCollapse.classList.remove("show");
    });
  });
  let navbarToggler = document.getElementById("navbarToggler");
  let offcanvasNavbar = document.getElementById("offcanvasNavbar");
  let offcanvasClose = document.getElementById("offcanvasClose");
  if (navbarToggler) {
    navbarToggler.addEventListener("click", function () {
      console.log("Navbar toggler clicked");
      if (offcanvasNavbar) {
        offcanvasNavbar.classList.toggle("show");
        console.log("Offcanvas menu toggled");
      }
    });
  }
  if (offcanvasClose) {
    offcanvasClose.addEventListener("click", function () {
      console.log("Offcanvas close button clicked");
      if (offcanvasNavbar) {
        offcanvasNavbar.classList.remove("show");
        console.log("Offcanvas menu closed");
      }
    });
  }
});
window.addEventListener("scroll", function () {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 100) {
    backToTopButton.classList.add("active");
  } else {
    backToTopButton.classList.remove("active");
  }
});
document.querySelector(".back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtns = document.querySelectorAll(".read-more-btn");
  const readLessBtns = document.querySelectorAll(".read-less-btn");
  readMoreBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".dots")[index].classList.add("d-none");
      document.querySelectorAll(".more-text")[index].classList.remove("d-none");
      btn.classList.add("d-none");
      readLessBtns[index].classList.remove("d-none");
    });
  });
  readLessBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".dots")[index].classList.remove("d-none");
      document.querySelectorAll(".more-text")[index].classList.add("d-none");
      btn.classList.add("d-none");
      readMoreBtns[index].classList.remove("d-none");
    });
  });
});
let currentIndex = 0;
function showNextTestimonial() {
  const testimonials = document.querySelectorAll(
    ".testimonial-slide .testimonial"
  );
  const totalTestimonials = testimonials.length;
  currentIndex = (currentIndex + 1) % totalTestimonials;
  const offset = -currentIndex * 100;
  document.querySelector(
    ".testimonial-slide"
  ).style.transform = `translateX(${offset}%)`;
}
setInterval(showNextTestimonial, 5000);
document.getElementById("my-form").addEventListener("submit", function (event) {
  event.preventDefault();
  var form = event.target;
  var data = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        document.getElementById("status").innerText =
          "Thank you! Your enquiry has been sent.";
        document.getElementById("status").style.color = "green";
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            document.getElementById("status").innerText = data.errors
              .map((error) => error.message)
              .join(", ");
            document.getElementById("status").style.color = "red";
          } else {
            document.getElementById("status").innerText =
              "Oops! There was a problem submitting your form";
            document.getElementById("status").style.color = "red";
          }
        });
      }
    })
    .catch((error) => {
      document.getElementById("status").innerText =
        "Oops! There was a problem submitting your form";
      document.getElementById("status").style.color = "red";
    });
});
ScrollReveal().reveal(".animate", {
  delay: 300,
  distance: "20px",
  origin: "bottom",
  easing: "ease-in-out",
  interval: 100,
});
const saleNowBtn = document.getElementById("saleNowBtn");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close-btn");
saleNowBtn.addEventListener("click", function (event) {
  event.preventDefault();
  popupForm.style.display = "flex";
});
closeBtn.addEventListener("click", function () {
  popupForm.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === popupForm) {
    popupForm.style.display = "none";
  }
});
