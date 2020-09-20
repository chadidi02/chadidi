const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
	navbar.classList.toggle("change");
});

// Header
let menu = document.querySelector("Header");

window.onscroll = function () {
	// pageYOffset or scrollY
	if (window.pageYOffset > 0) {
		menu.classList.add("scrolled");
	} else {
		menu.classList.remove("scrolled");
	}
};
