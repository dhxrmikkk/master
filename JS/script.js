const section = gsap.utils.toArray(".fade-in");

section.forEach((box) => {
  gsap.fromTo(
    box,
    { autoAlpha: 0 },
    {
      duration: 1,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: box,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        once: true,
      },
    }
  );
});

jQuery(document).ready(function ($) {
  if ($(window).scrollTop() >= 70) {
    $(".header").addClass("is-sticky");
    $(".header-pattern").addClass("hidden");
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 70) {
      $(".header").addClass("is-sticky");
      $(".header-pattern").addClass("hidden");
    } else {
      $(".header").removeClass("is-sticky");
      $(".header-pattern").removeClass("hidden");
    }
  });
});

let open_btn = document.querySelector(".open-button");
let sidebar = document.querySelector(".sidebar");
let close_btn = document.querySelector(".close-btn");
let sidebar_links = document.querySelectorAll(".sidebar ul li ");
let sidebar_timeline = gsap.timeline();

sidebar_timeline.to(sidebar, {
  right: 0,
  duration: 0.3,
});
sidebar_timeline.from(sidebar_links, {
  x: 150,
  opacity: 0,
  duration: 0.3,
  stagger: 0.1,
});
sidebar_timeline.pause();

open_btn.addEventListener("click", function () {
  sidebar_timeline.play();
  document.body.style.overflow = "hidden";
});

close_btn.addEventListener("click", function () {
  sidebar_timeline.reverse();
  document.body.style.overflow = "";
});
