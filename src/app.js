const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
	navbar.classList.toggle("change");
});

// Header
var menu = document.querySelector("Header");

window.onscroll = function () {
	// pageYOffset or scrollY
	if (window.pageYOffset > 0) {
		menu.classList.add("scrolled");
	} else {
		menu.classList.remove("scrolled");
	}
};

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
	origin: "top",
	distance: "80px",
	duration: 2000,
	reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home__title", { origin: "right", delay: 600 });
sr.reveal(".home__img", { origin: "left", delay: 600 });
sr.reveal(".home__btn", { delay: 400 });

// // /*SCROLL ABOUT*/
sr.reveal(".about__img", { delay: 500 });
sr.reveal(".about__subtitle", { delay: 300 });
sr.reveal(".about__skills", { delay: 400 });
sr.reveal(".about__text", { origin: "right", delay: 600 });
sr.reveal(".about__social-icon", { delay: 600, interval: 200 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__name", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".skills__img", { delay: 400 });

/*SCROLL PORTFOLIO*/
sr.reveal(".portfolio__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__subtitle", {});
sr.reveal(".contact__text", { interval: 200 });
sr.reveal(".contact__input", { delay: 400 });
sr.reveal(".contact__button", { delay: 600 });
