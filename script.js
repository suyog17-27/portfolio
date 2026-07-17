/* ===========================
   TYPING ANIMATION
=========================== */

var typed = new Typed(".typing", {
    strings: [
        "Python Developer",
        "Data Analyst",
        "Machine Learning Enthusiast",
        "Open to Work"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});


/* ===========================
   SCROLL REVEAL
=========================== */

ScrollReveal({
    distance: "60px",
    duration: 1800,
    delay: 200,
    reset: false
});

ScrollReveal().reveal(".hero-left", {
    origin: "left"
});

ScrollReveal().reveal(".hero-right", {
    origin: "right"
});

ScrollReveal().reveal(".title", {
    origin: "top"
});

ScrollReveal().reveal(".card,.project,.skill,form", {
    interval: 200
});


/* ===========================
   DARK / LIGHT MODE
=========================== */



const themeBtn = document.querySelector(".theme");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});


/* ===========================
   ACTIVE NAVBAR
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

};


/* ===========================
   BACK TO TOP BUTTON
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400)
        topBtn.style.display = "block";
    else
        topBtn.style.display = "none";

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

/* ===========================
   CERTIFICATE MODAL
=========================== */

const certificateLinks = document.querySelectorAll('.certificate-link');
const certificateModal = document.getElementById('certificateModal');
const certificateModalFrame = document.getElementById('certificateModalFrame');
const certificateClose = document.querySelector('.certificate-close');

function closeCertificateModal() {
    if (certificateModal) {
        certificateModal.classList.remove('show');
        certificateModal.setAttribute('aria-hidden', 'true');
    }
    if (certificateModalFrame) {
        certificateModalFrame.src = '';
    }
    document.body.style.overflow = '';
}

certificateLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const fileSrc = link.getAttribute('data-file');

        if (fileSrc && certificateModalFrame) {
            certificateModalFrame.src = fileSrc;
            certificateModal.classList.add('show');
            certificateModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    });
});

if (certificateClose) {
    certificateClose.addEventListener('click', closeCertificateModal);
}

if (certificateModal) {
    certificateModal.addEventListener('click', (e) => {
        if (e.target === certificateModal) {
            closeCertificateModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCertificateModal();
    }
});