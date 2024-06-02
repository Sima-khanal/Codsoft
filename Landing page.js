document.addEventListener('DOMContentLoaded', function() {
    const messageNowBtn = document.getElementById('messageNowBtn');

    messageNowBtn.addEventListener('click', function() {
        alert('Thank you for your message! We will get back to you shortly.');
    });
    
    const searchButton = document.querySelector('.search-container button');
    const searchInput = document.querySelector('.search-container input');

    searchButton.addEventListener('click', function() {
        alert(`Searching for: ${searchInput.value}`);
    });
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

showSlides(slideIndex);
function showSlides(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;
}
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    showSlides(slideIndex);
}
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            event.preventDefault();
        }
    });

