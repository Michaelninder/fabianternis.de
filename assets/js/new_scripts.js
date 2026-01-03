const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("languageSwitch");
const htmlElement = document.documentElement;

const getStoredTheme = () => localStorage.getItem("theme") || "auto";
const getStoredLang = () => localStorage.getItem("lang") || "en";

const applyTheme = (theme) => {
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
};

const applyLanguage = (lang) => {
    htmlElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
    initNameAnimations();
};

const initNameAnimations = () => {
    const activeIntroduction = document.querySelector(
        `.introduction[data-language="${htmlElement.getAttribute("lang")}"]`
    );
    
    if (!activeIntroduction) return;

    const nameContainer = activeIntroduction.querySelector(".name");
    if (!nameContainer) return;

    const characters = nameContainer.querySelectorAll("span[aria-label]");
    const cursorUrl = "url('/assets/svg/arrowhead-rounded-outline.svg'), auto";

    characters.forEach((char) => {
        char.style.cursor = cursorUrl;
        char.addEventListener("mouseenter", () => {
            char.classList.add("bounce");
        });
        char.addEventListener("animationend", () => {
            char.classList.remove("bounce");
        });
    });
};

themeToggle.addEventListener("click", () => {
    const currentTheme = getStoredTheme();
    const themes = ["auto", "light", "dark"];
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    applyTheme(nextTheme);
});

langToggle.addEventListener("click", () => {
    const nextLang = htmlElement.getAttribute("lang") === "en" ? "de" : "en";
    applyLanguage(nextLang);
    //langToggle.textContent = nextLang.toUpperCase();
    langToggle.innerHTML = `<img src="assets/img/flags/${nextLang}.png" class="flag">`;
});

applyTheme(getStoredTheme());
applyLanguage(getStoredLang());
langToggle.innerHTML = `<img src="assets/img/flags/${htmlElement.getAttribute("lang")}.png" class="flag">`;