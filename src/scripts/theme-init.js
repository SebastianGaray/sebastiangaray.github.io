(() => {
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const storageKey = "theme-preference";
  const preferences = ["system", "light", "dark"];
  const themeColor = { light: "#fdf8f8", dark: "#1b1918" };
  let preference = "system";

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved && preferences.includes(saved)) preference = saved;
  } catch {}

  const apply = () => {
    const theme =
      preference === "system" ? (media.matches ? "dark" : "light") : preference;

    root.dataset.theme = theme;
    root.dataset.themePreference = preference;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", themeColor[theme]);
    window.dispatchEvent(
      new CustomEvent("portfolio-theme-applied", {
        detail: { preference, theme },
      }),
    );
  };

  const followSystem = () => apply();

  const syncSystemListener = () => {
    media.removeEventListener("change", followSystem);
    if (preference === "system") media.addEventListener("change", followSystem);
  };

  window.addEventListener("portfolio-theme-select", (event) => {
    const selected = event instanceof CustomEvent ? event.detail : null;
    if (!preferences.includes(selected)) return;

    preference = selected;
    try {
      localStorage.setItem(storageKey, preference);
    } catch {}
    syncSystemListener();
    apply();
  });

  syncSystemListener();
  apply();
})();
