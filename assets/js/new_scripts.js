const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

const getStoredTheme = () => localStorage.getItem("theme") || "auto";

const applyTheme = (theme) => {
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
};

themeToggle.addEventListener("click", () => {
    const currentTheme = getStoredTheme();
    let nextTheme;

    if (currentTheme === "auto") {
        nextTheme = "light";
    } else if (currentTheme === "light") {
        nextTheme = "dark";
    } else {
        nextTheme = "auto";
    }

    applyTheme(nextTheme);
});

applyTheme(getStoredTheme());