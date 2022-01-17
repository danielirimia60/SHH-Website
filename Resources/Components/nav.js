const nav = document.querySelector(".main-nav-bar");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navBackground = document.querySelector(".nav-wrap");

navToggle.addEventListener('click', () => {

    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        navBackground.style.background = "hsla(0, 0%, 100%, 1)";
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        navBackground.style.background = "hsla(187, 2%, 98%, 0.5)";
    }
})
