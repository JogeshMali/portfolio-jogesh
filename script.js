document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeToggleBtn");
    const rootElement = document.documentElement;

    // Check saved theme
    const savedTheme = localStorage.getItem("portfolioTheme") || "dark";
    rootElement.setAttribute("data-theme", savedTheme);
    updateIcon(savedTheme);

    themeBtn.addEventListener("click", () => {
        const currentTheme = rootElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        rootElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolioTheme", newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === "dark") {
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
});