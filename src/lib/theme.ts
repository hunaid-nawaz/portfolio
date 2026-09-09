export const THEME_COOKIE = "hunaid-theme-v3";

export type Theme = "light" | "dark";

export function resolveTheme(value: string | undefined): Theme | undefined {
  if (value === "dark" || value === "light") {
    return value;
  }

  return undefined;
}
