let currentLang = localStorage.getItem("lang") || "gu";

function setLanguage(lang) {
    let elements = document.querySelectorAll("[data-en]");
    
    elements.forEach(el => {
        let enText = el.getAttribute("data-en");
        let guText = el.getAttribute("data-gu");

        if (lang === "gu") {
            el.innerText = guText || enText;
        } else {
            el.innerText = enText || guText;
        }
    });

    document.getElementById("langBtn").innerText = (lang === "gu") ? "English" : "ગુજરાતી";

    localStorage.setItem("lang", lang);
}

function toggleLanguage() {
    currentLang = (currentLang === "gu") ? "en" : "gu";
    setLanguage(currentLang);
}

// ✅ IMPORTANT FIX
document.addEventListener("DOMContentLoaded", function () {
    setLanguage(currentLang);
});
