"use strict";
let currentYearEl = document.querySelector(".year");
let currentYear = new Date().getFullYear();
currentYearEl.textContent = currentYear;
dropbtn.addEventListener("click", function () {
	myDropdown.classList.toggle("show");
});
