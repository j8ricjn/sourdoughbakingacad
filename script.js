const root = document.documentElement;
const savedTheme = localStorage.getItem("sourdough-theme");
if (savedTheme) root.dataset.theme = savedTheme;
document.querySelectorAll(".theme-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("sourdough-theme", next);
  });
});
document.querySelectorAll("[data-year]").forEach(item => item.textContent = new Date().getFullYear());
