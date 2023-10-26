const loader = document.getElementById("loader");
const loader2 = document.getElementById("loader2");
const menuBarContainer = document.getElementById("menuBarContainer");

setTimeout(function load() {
    loader.style.display = "none";
    loader2.style.display = "none";
}, 1800);

setTimeout(function load() {
    loader.classList.add("loader-hidden");
    loader2.classList.add("loader-hidden");
    menuBarContainer.classList.add("menuBarContainer-visible");
}, 800);


