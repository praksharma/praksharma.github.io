(function () {
  const KEY = "ui-theme";

  function applyTheme(theme) {
    document.body.classList.toggle("win7-mode", theme === "win7");
  }

  function toggleWin7() {
    const current = localStorage.getItem(KEY) || "default";
    const next = current === "win7" ? "default" : "win7";

    localStorage.setItem(KEY, next);
    applyTheme(next);
  }

  function init() {
    const saved = localStorage.getItem(KEY) || "default";
    applyTheme(saved);

    const btn = document.getElementById("win7-toggle");
    if (btn) {
      btn.addEventListener("click", toggleWin7);
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();