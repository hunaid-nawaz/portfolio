import { THEME_COOKIE, type Theme } from "./theme";

export function applyTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
  document.cookie = `${THEME_COOKIE}=${theme};path=/;max-age=31536000;samesite=lax`;
}

export function applyStoredTheme() {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${THEME_COOKIE}=(light|dark)`),
  );
  if (!match) {
    return;
  }
  applyTheme(match[1] as Theme);
}
