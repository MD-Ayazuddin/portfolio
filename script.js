// MOVING TOOLS STRIP 

const stripTrack = document.getElementById("stripTrack");
stripTrack.innerHTML = stripTrack.innerHTML + stripTrack.innerHTML;


// LIGHT / DARK MODE 

const themeBtn = document.getElementById("themeBtn");

// This function switches the page to "light" or "dark"
function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "Dark mode";   // the button shows what you can switch to
  } else {
    document.body.classList.remove("light");
    themeBtn.textContent = "Light mode";
  }

  // Remember the choice for next visit (try/catch: some browsers block this)
  try {
    localStorage.setItem("theme", mode);
  } catch (error) {}
}

// When the button is clicked, switch to the other mode
themeBtn.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
});

// When the page opens, use the saved choice. If none, start in dark mode.
let saved = "dark";
try {
  saved = localStorage.getItem("theme") || "dark";
} catch (error) {}
setTheme(saved);
