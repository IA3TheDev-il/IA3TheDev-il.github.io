const toggle = document.getElementsByClassName("toggle")[0];
const banner = document.getElementsByClassName("banner")[0];

toggle.addEventListener("click", function() {
    this.classList.toggle("active");
    banner.classList.toggle("active");
});