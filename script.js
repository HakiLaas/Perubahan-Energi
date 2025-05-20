// Hamburger Menu
const toggleBtn = document.querySelector('.togglebtn');
const navLinks = document.querySelector('.nav-link');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

    // Button Next dan Home
document.addEventListener("DOMContentLoaded", () => {
    const nextSection = document.querySelector(".next-section a");
    const aboutSection = document.getElementById("information");
    const arrowIcon = nextSection.querySelector("i");
    
    window.addEventListener("scroll", () => {
        const aboutTop = aboutSection.getBoundingClientRect().top;
    
        if (aboutTop <= 100) {
            arrowIcon.classList.remove("bx-chevron-down");
            arrowIcon.classList.add("bx-chevron-up");
            nextSection.href = "#"; 
        } else {
            arrowIcon.classList.remove("bx-chevron-up");
            arrowIcon.classList.add("bx-chevron-down");
            nextSection.href = "#information"; 
        }
    });
});

// Dark Mode Light Mode
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelectorAll("#theme, #sun");
    const body = document.body;

    const Icon = () => {
        themeToggle.forEach(btn => {
            if (body.classList.contains("dark")) {
                btn.classList.remove("bx-sun");
                btn.classList.add("bx-moon");
            } else {
                btn.classList.remove("bx-moon");
                btn.classList.add("bx-sun");
            }
        });
    };

    themeToggle.forEach(toggle => {
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark"); 
            Icon();
        });
    });
    Icon();
});

document.addEventListener("DOMContentLoaded", function () {
    // Swiper slider
    new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000, // Ganti ke waktu yang diinginkan (ms)
            disableOnInteraction: false, // Autoplay tetap berjalan setelah user swipe
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeButton = document.querySelector('.lightbox .close');
const galleryImages = document.querySelectorAll('.gallery img, .container .hero-pic img');
const galleryVideos = document.querySelectorAll('.gallery video');
const lightboxVideo = document.querySelector('.lightbox-video');

// Play video on hover, pause on mouseout
galleryVideos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
    // Show video in lightbox on click
    video.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.style.display = 'none';
        lightboxVideo.style.display = 'block';
        lightboxVideo.src = video.src;
        lightboxVideo.poster = video.poster || '';
        lightboxVideo.currentTime = 0;
        lightboxVideo.play();
        lightboxCaption.textContent = video.getAttribute('data-caption') || '';
    });
});

// Show image in lightbox (update existing code)
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.style.display = 'block';
        lightboxVideo.style.display = 'none';
        lightboxImage.src = image.src;
        lightboxCaption.textContent = image.getAttribute('data-caption');
        lightboxImage.classList.add('zoom-in');
        setTimeout(() => {
            lightboxImage.classList.remove('zoom-in');
        }, 300);
    });
});

// Close lightbox (update existing code)
closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;
});

// Close lightbox on outside click (update existing code)
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxVideo.pause();
        lightboxVideo.currentTime = 0;
    }
});