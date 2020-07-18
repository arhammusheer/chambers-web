lightCss = document.getElementById("light-theme");
darkCss = document.getElementById("dark-theme");
themeIcon = document.getElementById("theme-icon");

localTheme = localStorage["set-theme"];

if (localTheme == "dark") darkTheme();
if (localTheme == "light") lightTheme();
if (!localTheme) darkTheme();
if (localTheme != "dark" && localTheme != "light") lightTheme();

function darkTheme() {
  localStorage["set-theme"] = localTheme = "dark";
  themeIcon.className = "fas fa-lg fa-cloud-sun";
  $("body").fadeIn();
  lightCss.disabled = true;
  darkCss.disabled = false;
}

function lightTheme() {
  localStorage["set-theme"] = localTheme = "light";
  themeIcon.className = "fas fa-lg fa-cloud-moon";
  $("body").fadeIn();
  lightCss.disabled = false;
  darkCss.disabled = true;
}

function toggleTheme() {
  if (localTheme == "light") {
    darkTheme();
  } else {
    lightTheme();
  }
}
