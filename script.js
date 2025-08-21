// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => nav.classList.toggle("open"));

// Slider
const slidesWrap = document.getElementById("slides");
const slides = document.querySelectorAll(".slide");
const dotsWrap = document.getElementById("dots");
let index = 0;

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goTo(i));
  dotsWrap.appendChild(dot);
});

function goTo(i) {
  index = (i + slides.length) % slides.length;
  slidesWrap.style.transform = `translateX(-${index * 100}%)`;
  dotsWrap.querySelectorAll("button").forEach((d, idx) =>
    d.classList.toggle("active", idx === index)
  );
}
document.getElementById("next").addEventListener("click", () => goTo(index + 1));
document.getElementById("prev").addEventListener("click", () => goTo(index - 1));

// Auto play
setInterval(() => goTo(index + 1), 6000);
