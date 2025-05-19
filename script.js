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