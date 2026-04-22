let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
    let elements = document.querySelectorAll("[data-en]");

    elements.forEach(el => {
        if (lang === "gu") {
            el.innerText = el.getAttribute("data-gu");
        } else {
            el.innerText = el.getAttribute("data-en");
        }
    });

    document.getElementById("langBtn").innerText = (lang === "gu") ? "English" : "ગુજરાતી";
    localStorage.setItem("lang", lang);
}

function toggleLanguage() {
    currentLang = (currentLang === "en") ? "gu" : "en";
    setLanguage(currentLang);
}

window.onload = () => {
    setLanguage(currentLang);
};
