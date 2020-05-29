lightTheme = document.getElementById("light-theme");
darkTheme = document.getElementById("dark-theme");
themeIcon = document.getElementById("theme-icon");
searchInput = document.getElementById("search-input");

if (localStorage["set-theme"]) {
	if(localStorage["set-theme"] == "light") {
		lightTheme.disabled = false;
		darkTheme.disabled = true;
		themeIcon.className = "fas fa-lg fa-cloud-sun";
		searchInput.className = "form-control bg-light";
	}
	if(localStorage['set-theme'] == "dark") {
		darkTheme.disabled = false;
		lightTheme.disabled = true;
		themeIcon.className = "fas fa-lg fa-cloud-moon";
		searchInput.className = "form-control bg-dark";
	}
} else {
	localStorage["set-theme"] = "light";
	lightTheme.disabled = false;
	themeIcon.className = "fas fa-lg fa-cloud-sun";
	searchInput.className = "form-control bg-light";
}

function toggleTheme(){
	if(localStorage['set-theme'] == "dark"){
		localStorage['set-theme'] = "light";
		lightTheme.disabled = false;
		darkTheme.disabled = true;
		themeIcon.className = "fas fa-lg fa-cloud-sun";
		searchInput.className = "form-control bg-light";
	} else {
		localStorage['set-theme'] = "dark";
		lightTheme.disabled = true;
		darkTheme.disabled = false;
		themeIcon.className = "fas fa-lg fa-cloud-moon";
		searchInput.className = "form-control bg-dark";
	}
}