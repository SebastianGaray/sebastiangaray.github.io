import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const sourceUrl = new URL("../src/scripts/theme-init.js", import.meta.url);
const source = readFileSync(sourceUrl, "utf8");

class EventTarget {
  listeners = new Map();

  addEventListener(type, listener) {
    const listeners = this.listeners.get(type) ?? new Set();
    listeners.add(listener);
    this.listeners.set(type, listeners);
  }

  removeEventListener(type, listener) {
    this.listeners.get(type)?.delete(listener);
  }

  dispatchEvent(event) {
    this.listeners.get(event.type)?.forEach((listener) => listener(event));
  }
}

class CustomEvent {
  constructor(type, options = {}) {
    this.type = type;
    this.detail = options.detail;
  }
}

const loadTheme = ({ saved = null, systemDark = false } = {}) => {
  const window = new EventTarget();
  const media = new EventTarget();
  const dataset = {};
  const stored = new Map(saved ? [["theme-preference", saved]] : []);
  const meta = {
    content: "",
    setAttribute: (_, value) => (meta.content = value),
  };

  media.matches = systemDark;
  window.matchMedia = () => media;

  vm.runInNewContext(
    source,
    {
      CustomEvent,
      document: {
        documentElement: { dataset },
        querySelector: () => meta,
      },
      localStorage: {
        getItem: (key) => stored.get(key) ?? null,
        setItem: (key, value) => stored.set(key, value),
      },
      window,
    },
    { filename: sourceUrl.pathname },
  );

  const select = (preference) =>
    window.dispatchEvent(
      new CustomEvent("portfolio-theme-select", { detail: preference }),
    );
  const changeSystem = (dark) => {
    media.matches = dark;
    media.dispatchEvent({ type: "change" });
  };

  return { changeSystem, dataset, meta, select, stored };
};

test("System is the default and follows operating-system changes", () => {
  const theme = loadTheme();
  assert.deepEqual(theme.dataset, {
    theme: "light",
    themePreference: "system",
  });

  theme.changeSystem(true);
  assert.equal(theme.dataset.theme, "dark");
});

test("explicit preferences persist and ignore operating-system changes", () => {
  const theme = loadTheme({ systemDark: true });

  theme.select("light");
  assert.equal(theme.dataset.theme, "light");
  assert.equal(theme.stored.get("theme-preference"), "light");

  theme.changeSystem(false);
  theme.changeSystem(true);
  assert.equal(theme.dataset.theme, "light");

  theme.select("system");
  assert.equal(theme.dataset.theme, "dark");
  theme.changeSystem(false);
  assert.equal(theme.dataset.theme, "light");
});

test("saved preferences are restored on reload", () => {
  assert.equal(loadTheme({ saved: "dark" }).dataset.theme, "dark");
  assert.equal(loadTheme({ saved: "light" }).dataset.theme, "light");
});
