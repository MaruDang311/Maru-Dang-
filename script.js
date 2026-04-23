let currentLang = localStorage.getItem("lang") || "gu"; // Default Gujarati

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

// Toggle button
function toggleLanguage() {
    currentLang = (currentLang === "gu") ? "en" : "gu";
    setLanguage(currentLang);
}

// Auto detect browser language (first time only)
window.onload = () => {
    if (!localStorage.getItem("lang")) {
        let browserLang = navigator.language;

        // Gujarati priority
        if (browserLang.startsWith("gu")) {
            currentLang = "gu";
        } else {
            currentLang = "gu"; // fallback પણ Gujarati
        }
    }
    setLanguage(currentLang);
};
