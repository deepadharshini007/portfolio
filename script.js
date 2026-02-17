// ===== Page Load =====
window.addEventListener("load", function () {

    // Loader remove
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

    // Hero animation
    const heroText = document.querySelector(".hero-text");
    const heroImage = document.querySelector(".hero-image");

    if (heroText) heroText.classList.add("show");
    if (heroImage) heroImage.classList.add("show");

    // Typing Effect
    typeEffect();

    // Scroll Reveal
    initScrollReveal();

    // Smooth Navbar Scroll
    initSmoothScroll();

    // Particle Background
    initParticles();

});


// ===== Typing Animation =====
function typeEffect() {

    const text = "Deepadharshini P";
    const element = document.querySelector(".hero-text h1");

    if (!element) return;

    let index = 0;
    element.innerHTML = "";

    function typing() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, 80);
        }
    }

    typing();
}


// ===== Scroll Reveal =====
function initScrollReveal() {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-section");
            }
        });

    }, {
        threshold: 0.15,
        rootMargin: "-50px"
    });

    sections.forEach(sec => {
        sec.classList.add("hidden");
        observer.observe(sec);
    });

}


// ===== Smooth Navbar Scroll =====
function initSmoothScroll() {

    document.querySelectorAll('.navbar a').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }

        });

    });

}


// ===== Particle Background =====
function initParticles() {

    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = "-1";

    const ctx = canvas.getContext("2d");

    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5
        });
    }

    function animateParticles() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00f7ff";

        particles.forEach(p => {

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

}