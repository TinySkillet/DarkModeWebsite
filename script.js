const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const icon = document.querySelector(".btn_icon");

// Function to store the dark mode state in localStorage
function store(value) {
    localStorage.setItem('darkmode', value);
}

// Function to load the dark mode state from localStorage
function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (darkmode === 'true') {
        body.classList.add('darkmode');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.add('fa-sun');
    }
}

// Initial load
load();

// Toggle dark mode on button click
btn.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    icon.classList.add('animated');

    // Store the current state in localStorage
    store(body.classList.contains('darkmode'));

    // Update the icon
    if (body.classList.contains("darkmode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

    // Remove animation class after the animation completes
    setTimeout(() => {
        icon.classList.remove('animated');
    }, 500);
});

// Initialize the slick slider
$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplayspeed: 2000,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });
});
