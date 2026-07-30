/* ===========================
   TYPING ANIMATION
=========================== */

const words = [
    "MIS Analyst",
    "Data Analyst",
    "Power BI Developer",
    "Python Learner",
    "Excel Automation Expert"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    let currentWord = words[wordIndex];

    if (isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex--);
    } else {
        typing.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* ===========================
   DARK / LIGHT MODE
=========================== */

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("light")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }

    });

}

/* ===========================
   SMOOTH NAVIGATION
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/* ===========================
   NAVBAR SHADOW
=========================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.30)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

/* ===========================
   SCROLL REVEAL
=========================== */

const revealElements = document.querySelectorAll(
    ".project-card,.skill-card,.timeline-item,.about-box div,.profile-card"
);

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s";

});

window.addEventListener("scroll", reveal);

reveal();

/* ===========================
   ACTIVE NAVBAR LINK
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   BACK TO TOP BUTTON
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00c6ff;
color:white;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 10px 25px rgba(0,0,0,.3);
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================
   HERO BUTTON EFFECT
=========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log("%cWelcome to Amir Khan Portfolio",
"color:#00c6ff;font-size:20px;font-weight:bold;");